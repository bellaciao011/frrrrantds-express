// Webhook FreePay Brasil — recebe postbacks de mudança de status
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { mapFreepayStatus } from "../_shared/freepay.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { reportOrderToUtmify, extractTrackingFromOrder, type UtmifyStatus } from "../_shared/utmify.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface FreepayPostback {
  Id?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  ExternalId?: string;
  PaidAt?: string;
  Amount?: number; // EM REAIS
  Installments?: number;
  PaymentMethod?: string;
  Status?: string;
  PostbackUrl?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const externalQS = url.searchParams.get("external_id");

    const payload = (await req.json().catch(() => ({}))) as FreepayPostback;
    console.log("[freepay-webhook] payload", JSON.stringify(payload).slice(0, 1500));

    const transactionId = payload.Id ?? null;
    const status = mapFreepayStatus(payload.Status);
    const amountCents =
      typeof payload.Amount === "number" ? Math.round(payload.Amount * 100) : null;
    const paidAt =
      payload.PaidAt && !payload.PaidAt.startsWith("0001-01-01")
        ? new Date(payload.PaidAt).toISOString()
        : null;

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Localiza o pedido por external_id (querystring), depois por transaction_id
    let orderQuery = supa.from("orders").select("id, external_id, status, amount, store_slug, buyer_name, buyer_email, buyer_phone, buyer_document, buyer_ip, items, tracking, created_at, payment_method");
    if (externalQS) orderQuery = orderQuery.eq("external_id", externalQS);
    else if (transactionId) orderQuery = orderQuery.eq("transaction_id", transactionId);
    else {
      return new Response(JSON.stringify({ error: "Missing identifier" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: orders, error: findErr } = await orderQuery.limit(1);
    if (findErr) console.error("[freepay-webhook] find error", findErr);
    const order = orders?.[0];

    if (!order) {
      console.warn("[freepay-webhook] order not found", { externalQS, transactionId });
      return new Response(JSON.stringify({ ok: true, ignored: true }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const update: Record<string, unknown> = { status };
    if (transactionId) update.transaction_id = transactionId;
    if (paidAt) update.paid_at = paidAt;

    const { error: upErr } = await supa.from("orders").update(update).eq("id", order.id);
    if (upErr) console.error("[freepay-webhook] update error", upErr);

    if (status === "paid" && order.status !== "paid") {
      try {
        await sendPushcutOrderNotification({
          stage: "paid",
          amount: amountCents ?? order.amount,
          storeSlug: order.store_slug ?? "melissa",
          buyerName: order.buyer_name,
          externalId: order.external_id,
        });
      } catch (e) {
        console.error("[freepay-webhook] pushcut error", e);
      }

      try {
        await trackPurchaseServerSide({ supa, externalId: order.external_id });
      } catch (e) {
        console.error("[freepay-webhook] tiktok purchase error", e);
      }
    }

    return new Response(JSON.stringify({ ok: true, status }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[freepay-webhook] unexpected", e);
    return new Response(JSON.stringify({ error: "Internal error", detail: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
