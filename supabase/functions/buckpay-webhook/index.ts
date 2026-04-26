// Recebe webhooks da BuckPay (transaction.created e transaction.processed)
// e dispara o evento Purchase no TikTok Events API quando o pagamento é confirmado.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

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

    // Carrega o pedido para saber se já estava pago (evita duplicar notificação)
    // e para ter os dados (valor, loja, comprador)
    const { data: existingOrder } = await supa
      .from("orders")
      .select("status, amount, store_slug, buyer_name, external_id, paid_at")
      .eq("transaction_id", txId)
      .maybeSingle();

    const wasAlreadyPaid = existingOrder?.status === "paid" || !!existingOrder?.paid_at;

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

    if (isPaid) {
      await trackPurchaseServerSide({ supa, transactionId: txId });

      // Notifica Pushcut apenas na PRIMEIRA confirmação de pagamento
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
          console.error("[buckpay-webhook] pushcut error", e);
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
