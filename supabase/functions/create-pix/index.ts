// Cria uma transação PIX na Mangofy e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MANGOFY_BASE = "https://checkout.mangofy.com.br";

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
    const authorization = Deno.env.get("MANGOFY_AUTHORIZATION");
    const storeCode = Deno.env.get("MANGOFY_STORE_CODE");
    if (!authorization || !storeCode) {
      return new Response(JSON.stringify({ error: "Mangofy credentials not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as Body;

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

    const buyerDoc = onlyDigits(body.buyer.document);
    if (!buyerDoc || (buyerDoc.length !== 11 && buyerDoc.length !== 14)) {
      return new Response(JSON.stringify({ error: "CPF/CNPJ inválido" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const buyerPhone = normalizeBrazilianPhone(body.buyer.phone) ?? "5511999999999";
    const external_id = `pedido-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    // Itens no formato Mangofy: nome fixo para aparecer no painel
    const MANGOFY_PRODUCT_NAME = "como começar no tiktok shop";
    const items = (body.items ?? []).map((i) => ({
      code: String(i.id),
      name: MANGOFY_PRODUCT_NAME,
      amount: Math.round(i.price * 100),
      total: Math.max(1, i.quantity),
    }));

    if (items.length === 0) {
      items.push({
        code: "produto",
        name: MANGOFY_PRODUCT_NAME,
        amount: body.amount,
        total: 1,
      });
    }

    const postbackUrl = `${Deno.env.get("SUPABASE_URL")}/functions/v1/mangofy-webhook`;

    const payload: Record<string, unknown> = {
      payment_method: "pix",
      payment_format: "regular",
      installments: 1,
      payment_amount: body.amount,
      postback_url: postbackUrl,
      external_code: external_id,
      items,
      customer: {
        name: body.buyer.name.trim().slice(0, 255),
        email: body.buyer.email.trim().slice(0, 254),
        document: buyerDoc,
        phone: buyerPhone.slice(0, 20),
      },
      pix: {
        expires_in_days: 1,
      },
    };

    console.log("[create-pix] Calling Mangofy", { external_id, amount: body.amount });

    const resp = await fetch(`${MANGOFY_BASE}/api/v1/payment`, {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Store-Code": storeCode,
        "Content-Type": "application/json",
        Accept: "application/json",
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

    // Extrai PIX da resposta — defensivo, tenta vários nomes de campo
    const t = data?.data ?? data;
    const pixObj = t?.pix ?? t?.payment?.pix ?? {};
    const pixCode =
      pixObj?.copy_paste ??
      pixObj?.copy_and_paste ??
      pixObj?.qr_code ??
      pixObj?.code ??
      pixObj?.emv ??
      t?.qr_code ??
      null;
    const pixQrRaw =
      pixObj?.qrcode_base64 ??
      pixObj?.qr_code_base64 ??
      pixObj?.qrcode ??
      null;
    const pixQr =
      typeof pixQrRaw === "string" && pixQrRaw.length > 200 ? pixQrRaw : null;
    const txId = t?.payment_code ?? t?.code ?? t?.id ?? null;

    // Salva no banco
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
      buyer_document: buyerDoc,
      buyer_phone: buyerPhone,
      items: body.items ?? [],
      ttclid: body.ttclid ?? null,
      store_slug: body.store_slug ?? "melissa",
    });

    if (dbErr) {
      console.error("[create-pix] DB insert error", dbErr);
    }

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
