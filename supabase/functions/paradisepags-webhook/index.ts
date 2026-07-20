// Webhook Paradise Pags — recebe postbacks de mudança de status
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { mapParadiseStatus } from "../_shared/paradisepags.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { reportOrderToUtmify, extractTrackingFromOrder, type UtmifyStatus } from "../_shared/utmify.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ParadisePostback {
  transaction_id?: string | number;
  external_id?: string;
  status?: string;
  raw_status?: string;
  amount?: number; // centavos
  payment_method?: string;
  customer?: {
    name?: string; email?: string; document?: string; phone?: string;
  };
  pix_code?: string;
  webhook_type?: string;
  timestamp?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const externalQS = url.searchParams.get("external_id");

    const payload = (await req.json().catch(() => ({}))) as ParadisePostback;
    console.log("[paradisepags-webhook] payload", JSON.stringify(payload).slice(0, 1500));

    const transactionId = payload.transaction_id != null ? String(payload.transaction_id) : null;
    const externalId = externalQS || payload.external_id || null;
    const status = mapParadiseStatus(payload.status);
    const amountCents = typeof payload.amount === "number" ? payload.amount : null;
    const paidAt = status === "paid" ? new Date().toISOString() : null;

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    let orderQuery = supa.from("orders").select(
      "id, external_id, status, amount, store_slug, buyer_name, buyer_email, buyer_phone, buyer_document, buyer_ip, items, tracking, created_at, payment_method",
    );
    if (externalId) orderQuery = orderQuery.eq("external_id", externalId);
    else if (transactionId) orderQuery = orderQuery.eq("transaction_id", transactionId);
    else {
      return new Response(JSON.stringify({ error: "Missing identifier" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: orders, error: findErr } = await orderQuery.limit(1);
    if (findErr) console.error("[paradisepags-webhook] find error", findErr);
    const order = orders?.[0];

    if (!order) {
      console.warn("[paradisepags-webhook] order not found", { externalId, transactionId });
      return new Response(JSON.stringify({ ok: true, ignored: true }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const update: Record<string, unknown> = { status };
    if (transactionId) update.transaction_id = transactionId;
    if (paidAt) update.paid_at = paidAt;

    const { error: upErr } = await supa.from("orders").update(update).eq("id", order.id);
    if (upErr) console.error("[paradisepags-webhook] update error", upErr);

    if (status === "paid" && order.status !== "paid") {
      try {
        await sendPushcutOrderNotification({
          stage: "paid",
          amount: amountCents ?? order.amount,
          storeSlug: order.store_slug ?? "melissa",
          buyerName: order.buyer_name,
          externalId: order.external_id,
        });
      } catch (e) { console.error("[paradisepags-webhook] pushcut error", e); }

      try {
        await trackPurchaseServerSide({ supa, externalId: order.external_id });
      } catch (e) { console.error("[paradisepags-webhook] tiktok error", e); }
    }

    const utmifyStatusMap: Record<string, UtmifyStatus> = {
      paid: "paid",
      refused: "refused",
      refunded: "refunded",
      chargedback: "chargedback",
    };
    const utmifyStatus = utmifyStatusMap[status];
    if (utmifyStatus && order.status !== status) {
      try {
        await reportOrderToUtmify({
          orderId: order.external_id,
          paymentMethod: (order.payment_method as any) ?? "pix",
          status: utmifyStatus,
          createdAt: order.created_at ?? new Date().toISOString(),
          approvedAt: utmifyStatus === "paid" ? (paidAt ?? new Date().toISOString()) : null,
          refundedAt: utmifyStatus === "refunded" ? new Date().toISOString() : null,
          amountCents: amountCents ?? order.amount ?? 0,
          customer: {
            name: order.buyer_name,
            email: order.buyer_email,
            phone: order.buyer_phone,
            document: order.buyer_document,
            ip: order.buyer_ip,
          },
          items: (order.items as any[]) ?? [],
          tracking: extractTrackingFromOrder(order as any),
        });
      } catch (e) { console.error("[paradisepags-webhook] utmify error", e); }
    }

    return new Response(JSON.stringify({ ok: true, status }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[paradisepags-webhook] unexpected", e);
    // Sempre 200 pra Paradise não reencaminhar em loop; log fica registrado
    return new Response(JSON.stringify({ ok: true, error: String(e) }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
