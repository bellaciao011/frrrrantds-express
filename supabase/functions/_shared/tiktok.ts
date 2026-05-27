// Helper compartilhado: dispara TikTok Purchase server-side para todos os pixels ativos da loja.
// Idempotente em nível de pedido via coluna purchase_tracked_at.
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

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

interface PixelRow {
  pixel_id: string;
  access_token: string;
}

interface OrderRow {
  external_id: string;
  amount: number;
  buyer_email: string | null;
  buyer_phone: string | null;
  ttclid: string | null;
  store_slug: string | null;
  purchase_tracked_at: string | null;
}

async function fireTikTokPurchase(args: {
  pixel: PixelRow;
  order: OrderRow;
}) {
  try {
    const userData: Record<string, string> = {};
    if (args.order.buyer_email) {
      userData.email = await sha256Hex(args.order.buyer_email);
    }
    if (args.order.buyer_phone) {
      const digits = onlyDigits(args.order.buyer_phone);
      const withCountry = digits.startsWith("55") ? `+${digits}` : `+55${digits}`;
      userData.phone = await sha256Hex(withCountry);
    }

    const event: Record<string, unknown> = {
      event: "Purchase",
      event_time: Math.floor(Date.now() / 1000),
      event_id: `${args.order.external_id}-purchase`,
      user: userData,
      properties: {
        currency: "BRL",
        value: args.order.amount / 100,
        contents: [
          { content_id: args.order.external_id, content_type: "product" },
        ],
      },
    };

    if (args.order.ttclid) {
      event.context = { ad: { callback: args.order.ttclid } };
    }

    const payload = {
      event_source: "web",
      event_source_id: args.pixel.pixel_id,
      data: [event],
    };

    const resp = await fetch(TIKTOK_EVENTS_URL, {
      method: "POST",
      headers: {
        "Access-Token": args.pixel.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    console.log(
      `[tiktok] pixel=${args.pixel.pixel_id} order=${args.order.external_id} status=${resp.status} body=${text.slice(0, 300)}`,
    );
  } catch (e) {
    console.error("[tiktok] erro disparando evento", e);
  }
}

/**
 * Dispara Purchase no TikTok para o pedido identificado por external_id (ou transaction_id).
 * Garante que dispara apenas uma vez (usa purchase_tracked_at).
 */
export async function trackPurchaseServerSide(opts: {
  supa?: SupabaseClient;
  externalId?: string;
  transactionId?: string;
}) {
  const supa =
    opts.supa ??
    createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

  let query = supa
    .from("orders")
    .select(
      "external_id,amount,buyer_email,buyer_phone,ttclid,store_slug,purchase_tracked_at",
    )
    .limit(1);

  if (opts.externalId) {
    query = query.eq("external_id", opts.externalId);
  } else if (opts.transactionId) {
    query = query.eq("transaction_id", opts.transactionId);
  } else {
    return;
  }

  const { data: order, error: orderErr } = await query.maybeSingle();
  if (orderErr) {
    console.error("[tiktok] fetch order error", orderErr);
    return;
  }
  if (!order) {
    console.warn("[tiktok] pedido não encontrado para tracking");
    return;
  }
  if (order.purchase_tracked_at) {
    console.log(
      `[tiktok] purchase já tracked para ${order.external_id}, ignorando.`,
    );
    return;
  }

  // Marca antes de disparar para evitar corrida em retries do webhook
  const { error: markErr } = await supa
    .from("orders")
    .update({ purchase_tracked_at: new Date().toISOString() })
    .eq("external_id", order.external_id)
    .is("purchase_tracked_at", null);
  if (markErr) {
    console.error("[tiktok] erro marcando purchase_tracked_at", markErr);
    return;
  }

  const { data: pixels, error: pxErr } = await supa
    .from("tracking_pixels")
    .select("pixel_id,access_token")
    .eq("is_active", true);

  if (pxErr) {
    console.error("[tiktok] pixels error", pxErr);
    return;
  }
  if (!pixels || pixels.length === 0) {
    console.log(`[tiktok] nenhum pixel ativo`);
    return;
  }

  await Promise.all(
    (pixels as PixelRow[]).map((p) =>
      fireTikTokPurchase({ pixel: p, order: order as OrderRow }),
    ),
  );
}
