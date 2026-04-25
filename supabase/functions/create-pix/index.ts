// Cria uma transação PIX na BuckPay e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BUCKPAY_BASE = "https://api.realtechdev.com.br";

interface BuyerInput {
  name: string;
  email: string;
  document?: string;
  phone?: string;
}

interface ItemInput {
  id: string;
  name: string;
  price: number; // em reais
  quantity: number;
}

interface Body {
  amount: number; // em centavos (total final)
  buyer: BuyerInput;
  items: ItemInput[];
  tracking?: Record<string, string | null>;
}

function onlyDigits(s: string | undefined): string | undefined {
  if (!s) return undefined;
  const d = s.replace(/\D/g, "");
  return d.length ? d : undefined;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const token = Deno.env.get("BUCKPAY_TOKEN");
    const userAgent = Deno.env.get("BUCKPAY_USER_AGENT");
    if (!token || !userAgent) {
      return new Response(JSON.stringify({ error: "BuckPay credentials not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as Body;

    if (!body.amount || body.amount < 600) {
      return new Response(JSON.stringify({ error: "Valor mínimo de R$ 6,00" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!body.buyer?.name || !body.buyer?.email) {
      return new Response(JSON.stringify({ error: "Dados do comprador obrigatórios" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const external_id = `pedido-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    // Monta payload para BuckPay
    const firstItem = body.items?.[0];
    const payload: Record<string, unknown> = {
      external_id,
      payment_method: "pix",
      amount: body.amount,
      buyer: {
        name: body.buyer.name.trim().slice(0, 100),
        email: body.buyer.email.trim().slice(0, 100),
        ...(onlyDigits(body.buyer.document) ? { document: onlyDigits(body.buyer.document) } : {}),
        ...(onlyDigits(body.buyer.phone) ? { phone: onlyDigits(body.buyer.phone) } : {}),
      },
    };

    if (firstItem) {
      payload.product = { id: String(firstItem.id), name: String(firstItem.name).slice(0, 100) };
      payload.offer = {
        id: `offer-${firstItem.id}`,
        name: String(firstItem.name).slice(0, 100),
        quantity: Math.max(1, Math.min(100, body.items.reduce((s, i) => s + i.quantity, 0))),
      };
    }

    if (body.tracking) payload.tracking = body.tracking;

    console.log("[create-pix] Calling BuckPay", { external_id, amount: body.amount });

    const resp = await fetch(`${BUCKPAY_BASE}/v1/transactions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": userAgent,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let data: any;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!resp.ok) {
      console.error("[create-pix] BuckPay error", resp.status, data);
      return new Response(JSON.stringify({ error: "BuckPay error", status: resp.status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const t = data?.data ?? data;
    const pixCode = t?.pix?.code ?? null;
    const pixQr = t?.pix?.qrcode_base64 ?? null;
    const txId = t?.id ?? null;

    // Salva no banco com service role
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbErr } = await supa.from("orders").insert({
      external_id,
      transaction_id: txId,
      status: "pending",
      payment_method: "pix",
      amount: body.amount,
      pix_code: pixCode,
      pix_qrcode: pixQr,
      buyer_name: body.buyer.name,
      buyer_email: body.buyer.email,
      buyer_document: onlyDigits(body.buyer.document) ?? null,
      buyer_phone: onlyDigits(body.buyer.phone) ?? null,
      items: body.items ?? [],
    });

    if (dbErr) {
      console.error("[create-pix] DB insert error", dbErr);
    }

    return new Response(
      JSON.stringify({
        external_id,
        transaction_id: txId,
        pix_code: pixCode,
        pix_qrcode: pixQr,
        amount: body.amount,
        status: "pending",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("[create-pix] Unexpected", e);
    return new Response(JSON.stringify({ error: "Internal error", detail: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
