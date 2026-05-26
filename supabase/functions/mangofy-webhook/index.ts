// Webhook (postback) da Mangofy: atualiza status do pedido e dispara Purchase
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    console.log("[mangofy-webhook] payload:", JSON.stringify(payload).slice(0, 500));

    const externalCode: string | undefined = payload?.external_code;
    const paymentCode: string | undefined = payload?.payment_code;
    const status: string | undefined = payload?.payment_status;

    if (!externalCode && !paymentCode) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const isPaid = status === "approved" || status === "paid";

    // Carrega pedido para checar duplicidade
    let query = supa
      .from("orders")
      .select("status, amount, store_slug, buyer_name, external_id, paid_at");
    if (externalCode) {
      query = query.eq("external_id", externalCode);
    } else {
      query = query.eq("transaction_id", paymentCode!);
    }
    const { data: existingOrder } = await query.maybeSingle();

    const wasAlreadyPaid = existingOrder?.status === "paid" || !!existingOrder?.paid_at;

    const update: Record<string, unknown> = {};
    if (status) {
      // Normaliza para vocabulário interno
      if (isPaid) {
        update.status = "paid";
        update.paid_at = new Date().toISOString();
      } else if (status === "refunded") {
        update.status = "refunded";
      } else if (status === "chargedback") {
        update.status = "chargedback";
      } else if (status === "pending") {
        update.status = "pending";
      } else {
        update.status = status;
      }
    }
    if (paymentCode) update.transaction_id = paymentCode;

    if (Object.keys(update).length > 0) {
      let upd = supa.from("orders").update(update);
      if (externalCode) upd = upd.eq("external_id", externalCode);
      else upd = upd.eq("transaction_id", paymentCode!);
      const { error } = await upd;
      if (error) console.error("[mangofy-webhook] update error", error);
    }

    if (isPaid && existingOrder) {
      await trackPurchaseServerSide({ supa, externalId: existingOrder.external_id });

      if (!wasAlreadyPaid) {
        try {
          await sendPushcutOrderNotification({
            stage: "paid",
            amount: existingOrder.amount ?? 0,
            storeSlug: existingOrder.store_slug ?? "melissa",
            buyerName: existingOrder.buyer_name,
            externalId: existingOrder.external_id,
          });
        } catch (e) {
          console.error("[mangofy-webhook] pushcut error", e);
        }
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[mangofy-webhook]", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  }
});
