// Consulta o status de um pedido na FreePay e atualiza o banco se mudou.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";
import { getTransaction, mapParadiseStatus } from "../_shared/paradisepags.ts";
import { reportOrderToUtmify, extractTrackingFromOrder, type UtmifyStatus } from "../_shared/utmify.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};


Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    let externalId = url.searchParams.get("external_id");
    if (!externalId && req.method === "POST") {
      const b = await req.json().catch(() => ({}));
      externalId = b.external_id ?? null;
    }
    if (!externalId) {
      return new Response(JSON.stringify({ error: "external_id required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("PARADISEPAGS_SECRET_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ParadisePags not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: existingOrder } = await supa
      .from("orders")
      .select("status, amount, store_slug, buyer_name, buyer_email, buyer_phone, buyer_document, buyer_ip, items, tracking, created_at, payment_method, paid_at, transaction_id, external_id")
      .eq("external_id", externalId)
      .maybeSingle();

    if (!existingOrder?.transaction_id) {
      return new Response(JSON.stringify({ external_id: externalId, status: existingOrder?.status ?? "pending" }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { ok, status: httpStatus, data } = await getTransaction(existingOrder.transaction_id);

    if (!ok) {
      // Rate limited pela FreePay: retorna status atual do banco sem erro pro cliente
      if (httpStatus === 429) {
        return new Response(JSON.stringify({
          external_id: externalId,
          status: existingOrder.status ?? "pending",
          rate_limited: true,
        }), {
          status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "FreePay error", status: httpStatus, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const t = Array.isArray(data?.data) ? data.data[0] : (data?.data ?? data);
    const status = mapFreepayStatus(t?.status ?? t?.payment_status);


    const wasAlreadyPaid = existingOrder?.status === "paid" || !!existingOrder?.paid_at;

    const update: Record<string, unknown> = { status };
    if (status === "paid") update.paid_at = new Date().toISOString();

    await supa.from("orders").update(update).eq("external_id", externalId);

    if (status === "paid") {
      await trackPurchaseServerSide({ supa, externalId });

      if (!wasAlreadyPaid && existingOrder) {
        try {
          await sendPushcutOrderNotification({
            stage: "paid",
            amount: existingOrder.amount ?? 0,
            storeSlug: existingOrder.store_slug ?? "melissa",
            buyerName: existingOrder.buyer_name,
            externalId,
          });
        } catch (e) {
          console.error("[check-order] pushcut error", e);
        }
      }
    }

    // Utmify: notifica mudança de status
    const utmifyStatusMap: Record<string, UtmifyStatus> = {
      paid: "paid",
      refused: "refused",
      refunded: "refunded",
      chargedback: "chargedback",
    };
    const utmifyStatus = utmifyStatusMap[status];
    if (utmifyStatus && existingOrder && existingOrder.status !== status) {
      try {
        await reportOrderToUtmify({
          orderId: externalId,
          paymentMethod: (existingOrder.payment_method as any) ?? "pix",
          status: utmifyStatus,
          createdAt: existingOrder.created_at ?? new Date().toISOString(),
          approvedAt: utmifyStatus === "paid" ? new Date().toISOString() : null,
          refundedAt: utmifyStatus === "refunded" ? new Date().toISOString() : null,
          amountCents: existingOrder.amount ?? 0,
          customer: {
            name: existingOrder.buyer_name,
            email: (existingOrder as any).buyer_email,
            phone: (existingOrder as any).buyer_phone,
            document: (existingOrder as any).buyer_document,
            ip: (existingOrder as any).buyer_ip,
          },
          items: ((existingOrder as any).items as any[]) ?? [],
          tracking: extractTrackingFromOrder(existingOrder as any),
        });
      } catch (e) {
        console.error("[check-order] utmify error", e);
      }
    }

    return new Response(JSON.stringify({ external_id: externalId, status, transaction: t }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[check-order]", e);
    return new Response(JSON.stringify({ error: "Internal error", detail: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
