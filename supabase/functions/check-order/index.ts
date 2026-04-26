// Consulta o status de um pedido na BuckPay e atualiza o banco se mudou.
// Se detectar pagamento, dispara também o Purchase no TikTok (server-side).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { trackPurchaseServerSide } from "../_shared/tiktok.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const BUCKPAY_BASE = "https://api.realtechdev.com.br";

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

    const token = Deno.env.get("BUCKPAY_TOKEN")!;
    const userAgent = Deno.env.get("BUCKPAY_USER_AGENT")!;

    const resp = await fetch(`${BUCKPAY_BASE}/v1/transactions/external_id/${encodeURIComponent(externalId)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": userAgent,
        Accept: "application/json",
      },
    });

    const text = await resp.text();
    let data: any;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: "BuckPay error", status: resp.status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const t = data?.data ?? data;
    const status = t?.status ?? "pending";

    // Atualiza banco se status mudou
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const update: Record<string, unknown> = { status };
    if (status === "paid") update.paid_at = new Date().toISOString();

    await supa.from("orders").update(update).eq("external_id", externalId);

    if (status === "paid") {
      await trackPurchaseServerSide({ supa, externalId });
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
