// Cria uma transação PIX na Mangofy e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MANGOFY_BASE = "http://18.231.128.145:3001";
const DEFAULT_CUSTOMER_IP = "18.231.128.145";

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
  amount: number; // em centavos
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
  if (d.length === 10 || d.length === 11) return d;
  if (d.length >= 12) return d.slice(-11);
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
    const apiKey = Deno.env.get("MANGOFY_AUTHORIZATION");
    const storeCode = Deno.env.get("MANGOFY_STORE_CODE");
    const proxySecret = Deno.env.get("PROXY_SECRET");
    if (!apiKey || !storeCode) {
      return new Response(JSON.stringify({ error: "Mangofy credentials not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as Body;

    const fwd = req.headers.get("x-forwarded-for") ?? "";
    const buyerIp = fwd.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || null;
    const mangofyCustomerIp = Deno.env.get("MANGOFY_CUSTOMER_IP") ?? DEFAULT_CUSTOMER_IP;
    const buyerUserAgent = req.headers.get("user-agent") ?? null;

    if (!body.amount || body.amount < 500) {
      return new Response(JSON.stringify({ error: "Valor mínimo de R$ 5,00" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!body.buyer?.name || !body.buyer?.email) {
      return new Response(JSON.stringify({ error: "Dados do comprador obrigatórios" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const buyerPhone = normalizeBrazilianPhone(body.buyer.phone);
    const buyerDoc = onlyDigits(body.buyer.document);
    const external_id = `pedido-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;

    const PRODUCT_NAME = "Curso de como monetizar no tiktok Shop";
    const items = (body.items?.length ? body.items : [{ id: "item-1", name: PRODUCT_NAME, price: body.amount / 100, quantity: 1 }]).map((it) => ({
      code: String(it.id),
      name: PRODUCT_NAME,
      quantity: Number(it.quantity) || 1,
      amount: Math.round(Number(it.price) * 100),
    }));

    const payload: Record<string, unknown> = {
      external_code: external_id,
      payment_method: "pix",
      payment_format: "regular",
      installments: 1,
      payment_amount: body.amount,
      postback_url: `${supabaseUrl}/functions/v1/mangofy-webhook`,
      items,
      customer: {
        name: body.buyer.name.trim().slice(0, 100),
        email: body.buyer.email.trim().slice(0, 100),
        document: buyerDoc ?? "00000000000",
        ip: mangofyCustomerIp,
        ...(buyerPhone ? { phone: buyerPhone } : {}),
      },
      pix: { expires_in_days: 1 },
      extra: {
        ...(buyerUserAgent ? { userAgent: buyerUserAgent } : {}),
        metadata: {
          ...(body.tracking ?? {}),
          ...(body.ttclid ? { ttclid: body.ttclid } : {}),
          store: body.store_slug ?? null,
        },
      },
    };

    console.log("[create-pix] Calling Mangofy", { external_id, amount: body.amount });

    const resp = await fetch(`${MANGOFY_BASE}/payment`, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Store-Code": storeCode,
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-proxy-secret": proxySecret ?? "",
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    let data: any;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!resp.ok) {
      console.error("[create-pix] Mangofy error", resp.status, data);
      return new Response(JSON.stringify({ error: "Mangofy error", status: resp.status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const t = data?.data ?? data;
    const paymentCode = t?.payment_code ?? null;
    const pixObj = t?.pix ?? {};
    const pixCode =
      pixObj?.qrcode ??
      pixObj?.qrcode_text ??
      pixObj?.emv ??
      pixObj?.payload ??
      pixObj?.copy_paste ??
      pixObj?.code ??
      null;
    const pixImage = pixObj?.qrcode_image ?? pixObj?.qrcode_base64 ?? pixObj?.image ?? pixCode;

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbErr } = await supa.from("orders").insert({
      external_id,
      transaction_id: paymentCode,
      status: "pending",
      payment_method: "pix",
      amount: body.amount,
      pix_code: pixCode,
      pix_qrcode: pixImage,
      buyer_name: body.buyer.name,
      buyer_email: body.buyer.email,
      buyer_document: buyerDoc ?? null,
      buyer_phone: buyerPhone ?? null,
      items: body.items ?? [],
      ttclid: body.ttclid ?? null,
      store_slug: body.store_slug ?? "berzerk",
      buyer_ip: buyerIp,
      buyer_user_agent: buyerUserAgent,
    });

    if (dbErr) console.error("[create-pix] DB insert error", dbErr);

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
        transaction_id: paymentCode,
        pix_code: pixCode,
        pix_qrcode: pixImage,
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
