// Cria uma transação PIX na FreePay Brasil e salva o pedido no banco
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendPushcutOrderNotification } from "../_shared/pushcut.ts";
import { createTransaction } from "../_shared/paradisepags.ts";
import { reportOrderToUtmify } from "../_shared/utmify.ts";

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

    console.log("[create-pix] Calling ParadisePags", { external_id, amount: body.amount });

    const origin = req.headers.get("origin") || req.headers.get("referer") || "https://mejilestoreshop.lovable.app";

    const { ok, status, data } = await createTransaction({
      amount: body.amount,
      description: PRODUCT_NAME.slice(0, 100),
      reference: external_id,
      offer_link: origin,
      postback_url: `${supabaseUrl}/functions/v1/paradisepags-webhook?external_id=${encodeURIComponent(external_id)}`,
      customer: {
        name: body.buyer.name.trim().slice(0, 100),
        email: body.buyer.email.trim().slice(0, 100),
        document: buyerDoc ?? "00000000000",
        ...(buyerPhone ? { phone: buyerPhone.replace(/^\+/, "") } : {}),
      },
    });

    if (!ok || data?.status && data.status !== "success") {
      console.error("[create-pix] ParadisePags error", status, data);
      return new Response(JSON.stringify({ error: "ParadisePags error", status, details: data }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("[create-pix] ParadisePags response", JSON.stringify(data).slice(0, 2000));

    const transactionId: string | null = data?.transaction_id != null ? String(data.transaction_id) : null;
    const pixCode: string | null = data?.qr_code ?? null;
    const pixUrl: string | null = data?.qr_code_base64 ?? null;

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
      tracking: body.tracking ?? {},
    });

    if (dbErr) console.error("[create-pix] DB insert error", dbErr);

    // Utmify: reporta pedido criado (waiting_payment)
    try {
      await reportOrderToUtmify({
        orderId: external_id,
        paymentMethod: "pix",
        status: "waiting_payment",
        createdAt: new Date().toISOString(),
        amountCents: body.amount,
        customer: {
          name: body.buyer.name,
          email: body.buyer.email,
          phone: buyerPhone ?? null,
          document: buyerDoc ?? null,
          ip: buyerIp,
        },
        items: body.items ?? [],
        tracking: (body.tracking as any) ?? null,
      });
    } catch (e) {
      console.error("[create-pix] utmify error", e);
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
