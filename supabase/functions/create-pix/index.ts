// Cria uma transação PIX na FreePay Brasil e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";
import { createTransaction } from "../_shared/freepay.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

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
  if (d.length === 10 || d.length === 11) return `+55${d}`;
  if (d.length >= 12) return `+${d}`;
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
    const body = (await req.json()) as Body;

    const fwd = req.headers.get("x-forwarded-for") ?? "";
    const buyerIp = fwd.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || null;
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
    const srcItems = body.items?.length ? body.items : [{ id: "item-1", name: PRODUCT_NAME, price: body.amount / 100, quantity: 1 }];
    const items = srcItems.map((it) => ({
      title: PRODUCT_NAME,
      unit_price: Math.round(Number(it.price) * 100),
      quantity: Number(it.quantity) || 1,
      tangible: true,
    }));

    console.log("[create-pix] Calling FreePay", { external_id, amount: body.amount });

    const { ok, status, data } = await createTransaction({
      amount: body.amount,
      payment_method: "pix",
      postback_url: `${supabaseUrl}/functions/v1/freepay-webhook?external_id=${encodeURIComponent(external_id)}`,
      metadata: {
        external_id,
        store: body.store_slug ?? null,
        ttclid: body.ttclid ?? null,
        ...(body.tracking ?? {}),
      },
      customer: {
        name: body.buyer.name.trim().slice(0, 100),
        email: body.buyer.email.trim().slice(0, 100),
        document: { number: buyerDoc ?? "00000000000", type: "cpf" },
        ...(buyerPhone ? { phone: buyerPhone } : {}),
      },
      items,
      pix: { expires_in_days: 1 },
    });

    if (!ok) {
      console.error("[create-pix] FreePay error", status, data);
      return new Response(JSON.stringify({ error: "FreePay error", status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("[create-pix] FreePay response", JSON.stringify(data).slice(0, 2000));

    const t = Array.isArray(data?.data) ? data.data[0] : (data?.data ?? data);
    const transactionId: string | null = t?.id ?? null;
    const pixArr = Array.isArray(t?.pix) ? t.pix : (t?.pix ? [t.pix] : []);
    const pixCode: string | null = pixArr[0]?.qr_code ?? pixArr[0]?.qrcode ?? null;
    const pixUrl: string | null = pixArr[0]?.url ?? null;

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbErr } = await supa.from("orders").insert({
      external_id,
      transaction_id: transactionId,
      status: "pending",
      payment_method: "pix",
      amount: body.amount,
      pix_code: pixCode,
      pix_qrcode: pixUrl,
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
        transaction_id: transactionId,
        pix_code: pixCode,
        pix_qrcode: pixUrl,
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
