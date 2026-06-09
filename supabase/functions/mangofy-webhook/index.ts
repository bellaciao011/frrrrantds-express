// Recebe postbacks da Mangofy e atualiza pedidos / dispara Purchase no TikTok.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

function normalizeStatus(s?: string): string {
  if (!s) return "pending";
  if (s === "approved" || s === "paid") return "paid";
  if (s === "pending" || s === "waiting_payment") return "pending";
  return s;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    const data = payload?.data ?? payload;
    const paymentCode: string | undefined = data?.payment_code;
    const externalCode: string | undefined = data?.external_code;
    const status = normalizeStatus(data?.payment_status ?? data?.status);

    console.log("[mangofy-webhook] code:", paymentCode, "ext:", externalCode, "status:", status);

    if (!paymentCode && !externalCode) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    let query = supa.from("orders").select("status, amount, store_slug, buyer_name, external_id, paid_at");
    if (externalCode) query = query.eq("external_id", externalCode);
    else query = query.eq("transaction_id", paymentCode!);
    const { data: existingOrder } = await query.maybeSingle();

    const wasAlreadyPaid = existingOrder?.status === "paid" || !!existingOrder?.paid_at;
    const isPaid = status === "paid";

    const update: Record<string, unknown> = { status };
    if (isPaid) update.paid_at = new Date().toISOString();
    if (paymentCode) update.transaction_id = paymentCode;

    if (externalCode) {
      await supa.from("orders").update(update).eq("external_id", externalCode);
    } else if (paymentCode) {
      await supa.from("orders").update(update).eq("transaction_id", paymentCode);
    }

    if (isPaid) {
      await trackPurchaseServerSide({ supa, externalId: existingOrder?.external_id ?? externalCode });

      if (!wasAlreadyPaid && existingOrder) {
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
