// Recebe postbacks da MagicPay e atualiza pedidos / dispara Purchase no TikTok.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

function normalizeStatus(s?: string): string {
  if (!s) return "pending";
  if (s === "paid" || s === "approved") return "paid";
  if (s === "waiting_payment" || s === "pending") return "pending";
  return s;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    const data = payload?.data ?? {};
    const txId = data?.id ? String(data.id) : undefined;
    const externalRef: string | undefined = data?.externalRef ?? payload?.objectId;
    const status = normalizeStatus(data?.status);

    console.log("[magicpay-webhook] type:", payload?.type, "id:", txId, "ref:", externalRef, "status:", status);

    if (!txId && !externalRef) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Localiza pedido por externalRef (preferido) ou transaction_id
    let query = supa.from("orders").select("status, amount, store_slug, buyer_name, external_id, paid_at");
    if (externalRef) query = query.eq("external_id", externalRef);
    else query = query.eq("transaction_id", txId!);
    const { data: existingOrder } = await query.maybeSingle();

    const wasAlreadyPaid = existingOrder?.status === "paid" || !!existingOrder?.paid_at;
    const isPaid = status === "paid";

    const update: Record<string, unknown> = { status };
    if (isPaid) update.paid_at = new Date().toISOString();
    if (txId) update.transaction_id = txId;

    if (externalRef) {
      await supa.from("orders").update(update).eq("external_id", externalRef);
    } else if (txId) {
      await supa.from("orders").update(update).eq("transaction_id", txId);
    }

    if (isPaid) {
      await trackPurchaseServerSide({ supa, externalId: existingOrder?.external_id ?? externalRef });

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
          console.error("[magicpay-webhook] pushcut error", e);
        }
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[magicpay-webhook]", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  }
});
