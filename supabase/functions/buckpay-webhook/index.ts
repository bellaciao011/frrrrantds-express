// Recebe webhooks da BuckPay e dispara Purchase no TikTok Events API (server-side)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const TIKTOK_EVENTS_URL = "https://business-api.tiktok.com/open_api/v1.3/event/track/";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function onlyDigits(s: string | null | undefined): string {
  return (s ?? "").replace(/\D/g, "");
}

async function fireTikTokPurchase(args: {
  pixelId: string;
  accessToken: string;
  email?: string | null;
  phone?: string | null;
  ttclid?: string | null;
  externalId: string;
  amount: number; // em centavos
  ip?: string | null;
  userAgent?: string | null;
}) {
  try {
    const userData: Record<string, string> = {};
    if (args.email) userData.email = await sha256Hex(args.email);
    if (args.phone) {
      const digits = onlyDigits(args.phone);
      const withCountry = digits.startsWith("55") ? `+${digits}` : `+55${digits}`;
      userData.phone = await sha256Hex(withCountry);
    }
    if (args.ip) userData.ip = args.ip;
    if (args.userAgent) userData.user_agent = args.userAgent;

    const event: Record<string, unknown> = {
      event: "Purchase",
      event_time: Math.floor(Date.now() / 1000),
      event_id: `${args.externalId}-purchase`, // dedup com client
      user: userData,
      properties: {
        currency: "BRL",
        value: args.amount / 100,
        contents: [{ content_id: args.externalId, content_type: "product" }],
      },
    };

    if (args.ttclid) {
      event.context = { ad: { callback: args.ttclid } };
    }

    const payload = {
      event_source: "web",
      event_source_id: args.pixelId,
      data: [event],
    };

    const resp = await fetch(TIKTOK_EVENTS_URL, {
      method: "POST",
      headers: {
        "Access-Token": args.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    console.log(`[tiktok] pixel=${args.pixelId} status=${resp.status} body=${text.slice(0, 300)}`);
  } catch (e) {
    console.error("[tiktok] erro disparando evento", e);
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    console.log("[buckpay-webhook] event:", payload?.event, "id:", payload?.data?.id);

    const event: string = payload?.event ?? "";
    const data = payload?.data ?? {};
    const txId: string | undefined = data.id;
    const status: string | undefined = data.status;

    if (!txId) return new Response(JSON.stringify({ ok: true }), { status: 200 });

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const isPaid = event === "transaction.processed" || status === "paid";

    const update: Record<string, unknown> = {};
    if (status) update.status = status;
    if (isPaid) {
      update.status = "paid";
      update.paid_at = new Date().toISOString();
    }

    if (Object.keys(update).length > 0) {
      const { error } = await supa.from("orders").update(update).eq("transaction_id", txId);
      if (error) console.error("[buckpay-webhook] update error", error);
    }

    // Disparo do TikTok Purchase server-side (apenas em pagamento aprovado)
    if (isPaid) {
      const { data: order, error: orderErr } = await supa
        .from("orders")
        .select("external_id,amount,buyer_email,buyer_phone,ttclid,store_slug,purchase_tracked_at")
        .eq("transaction_id", txId)
        .maybeSingle();

      if (orderErr) {
        console.error("[buckpay-webhook] fetch order error", orderErr);
      } else if (order && !order.purchase_tracked_at) {
        // Marca já para evitar disparo duplicado em retentativas do webhook
        await supa
          .from("orders")
          .update({ purchase_tracked_at: new Date().toISOString() })
          .eq("transaction_id", txId);

        const { data: pixels, error: pxErr } = await supa
          .from("tracking_pixels")
          .select("pixel_id,access_token")
          .eq("is_active", true)
          .eq("store_slug", order.store_slug ?? "melissa");

        if (pxErr) {
          console.error("[buckpay-webhook] pixels error", pxErr);
        } else if (pixels && pixels.length > 0) {
          await Promise.all(
            pixels.map((p: { pixel_id: string; access_token: string }) =>
              fireTikTokPurchase({
                pixelId: p.pixel_id,
                accessToken: p.access_token,
                email: order.buyer_email,
                phone: order.buyer_phone,
                ttclid: order.ttclid,
                externalId: order.external_id,
                amount: order.amount,
              }),
            ),
          );
        } else {
          console.log("[buckpay-webhook] nenhum pixel ativo para store_slug:", order.store_slug);
        }
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[buckpay-webhook]", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  }
});
