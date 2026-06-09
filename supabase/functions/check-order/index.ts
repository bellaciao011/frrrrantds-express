// Consulta o status de um pedido na MagicPay e atualiza o banco se mudou.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const MAGICPAY_BASE = "https://api.gateway-magicpay.com/v1";

// MagicPay statuses → status interno simplificado
function normalizeStatus(s?: string): string {
  if (!s) return "pending";
  if (s === "paid" || s === "approved") return "paid";
  if (s === "waiting_payment" || s === "pending") return "pending";
  return s;
}

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

    const secretKey = Deno.env.get("MAGICPAY_SECRET_KEY")!;
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: existingOrder } = await supa
      .from("orders")
      .select("status, amount, store_slug, buyer_name, paid_at, transaction_id")
      .eq("external_id", externalId)
      .maybeSingle();

    if (!existingOrder?.transaction_id) {
      return new Response(JSON.stringify({ external_id: externalId, status: existingOrder?.status ?? "pending" }), {
        status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const auth = "Basic " + btoa(`${secretKey}:x`);
    const resp = await fetch(`${MAGICPAY_BASE}/transactions/${existingOrder.transaction_id}`, {
      headers: { Authorization: auth, Accept: "application/json" },
    });

    const text = await resp.text();
    let data: any;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: "MagicPay error", status: resp.status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const t = data?.data ?? data;
    const status = normalizeStatus(t?.status);

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
