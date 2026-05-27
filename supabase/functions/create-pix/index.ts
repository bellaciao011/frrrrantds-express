// Cria uma transação PIX na BuckPay e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

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
  ttclid?: string | null;
  store_slug?: string | null;
}

function onlyDigits(s: string | undefined): string | undefined {
  if (!s) return undefined;
  const d = s.replace(/\D/g, "");
  return d.length ? d : undefined;
}

function normalizeBrazilianPhone(s: string | undefined): string | undefined {
  const d = onlyDigits(s);
  if (!d) return undefined;
  if (d.length === 10 || d.length === 11) return `55${d}`;
  if (d.length >= 12) return d;
  return undefined;
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

    // Captura IP e User-Agent para match keys no TikTok Events API
    const fwd = req.headers.get("x-forwarded-for") ?? "";
    const buyerIp = fwd.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || null;
    const buyerUserAgent = req.headers.get("user-agent") ?? null;

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

    const buyerPhone = normalizeBrazilianPhone(body.buyer.phone);
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
        ...(buyerPhone ? { phone: buyerPhone } : {}),
      },
    };

    const GATEWAY_PRODUCT_NAME = "como começar no tiktok shop";
    if (firstItem) {
      payload.product = { id: String(firstItem.id), name: GATEWAY_PRODUCT_NAME };
      payload.offer = {
        id: `offer-${firstItem.id}`,
        name: GATEWAY_PRODUCT_NAME,
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
      buyer_phone: buyerPhone ?? null,
      items: body.items ?? [],
      ttclid: body.ttclid ?? null,
      store_slug: body.store_slug ?? "berzerk",
      buyer_ip: buyerIp,
      buyer_user_agent: buyerUserAgent,
    });

    if (dbErr) {
      console.error("[create-pix] DB insert error", dbErr);
    }

    // Notifica Pushcut: pedido pendente
    try {
      await sendPushcutOrderNotification({
        stage: "pending",
        amount: body.amount,
        storeSlug: body.store_slug ?? "melissa",
        buyerName: body.buyer.name,
        externalId: external_id,
      });
    } catch (e) {
      console.error("[create-pix] pushcut error", e);
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
