// Helper compartilhado: envia pedidos para a API da Utmify.
// Endpoint: POST https://api.utmify.com.br/api-credentials/orders
// Header: x-api-token: UTMIFY_API_TOKEN

const UTMIFY_URL = "https://api.utmify.com.br/api-credentials/orders";

export type UtmifyStatus =
  | "waiting_payment"
  | "paid"
  | "refused"
  | "refunded"
  | "chargedback";

export interface UtmifyTracking {
  src?: string | null;
  sck?: string | null;
  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_medium?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}

export interface UtmifyOrderItem {
  id?: string;
  name?: string;
  price?: number; // em reais
  quantity?: number;
}

export interface UtmifyOrderInput {
  orderId: string;
  platform?: string;
  paymentMethod?: "pix" | "credit_card" | "boleto" | "free_price";
  status: UtmifyStatus;
  createdAt: string; // ISO ou Date no DB
  approvedAt?: string | null;
  refundedAt?: string | null;
  amountCents: number;
  customer: {
    name: string;
    email?: string | null;
    phone?: string | null;
    document?: string | null;
    ip?: string | null;
  };
  items: UtmifyOrderItem[];
  tracking?: UtmifyTracking | null;
}

function toUtcDateTime(value: string | Date | null | undefined): string | null {
  if (!value) return null;
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return null;
  // Formato: YYYY-MM-DD HH:MM:SS em UTC
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}

function normalizePhone(s: string | null | undefined): string | null {
  if (!s) return null;
  const d = s.replace(/\D/g, "");
  return d.length ? d : null;
}

function normalizeDoc(s: string | null | undefined): string | null {
  if (!s) return null;
  const d = s.replace(/\D/g, "");
  return d.length ? d : null;
}

export async function reportOrderToUtmify(input: UtmifyOrderInput): Promise<{ ok: boolean; status: number; body: string }> {
  const token = Deno.env.get("UTMIFY_API_TOKEN");
  if (!token) {
    console.warn("[utmify] UTMIFY_API_TOKEN não configurado, pulando envio");
    return { ok: false, status: 0, body: "missing token" };
  }

  const totalPriceInCents = input.amountCents;
  // Sem gateway fee conhecido aqui — manda 0 e comissão = total
  const body = {
    orderId: input.orderId,
    platform: input.platform ?? "Meijile",
    paymentMethod: input.paymentMethod ?? "pix",
    status: input.status,
    createdAt: toUtcDateTime(input.createdAt) ?? toUtcDateTime(new Date())!,
    approvedDate: input.status === "paid" ? (toUtcDateTime(input.approvedAt ?? new Date())) : null,
    refundedAt: input.status === "refunded" ? (toUtcDateTime(input.refundedAt ?? new Date())) : null,
    customer: {
      name: input.customer.name,
      email: input.customer.email ?? null,
      phone: normalizePhone(input.customer.phone),
      document: normalizeDoc(input.customer.document),
      country: "BR",
      ip: input.customer.ip ?? null,
    },
    products: (input.items ?? []).map((it) => ({
      id: it.id ?? "item",
      name: it.name ?? "Produto",
      planId: null,
      planName: null,
      quantity: Number(it.quantity) || 1,
      priceInCents: Math.round(Number(it.price ?? 0) * 100),
    })),
    trackingParameters: {
      src: input.tracking?.src ?? null,
      sck: input.tracking?.sck ?? null,
      utm_source: input.tracking?.utm_source ?? null,
      utm_campaign: input.tracking?.utm_campaign ?? null,
      utm_medium: input.tracking?.utm_medium ?? null,
      utm_content: input.tracking?.utm_content ?? null,
      utm_term: input.tracking?.utm_term ?? null,
    },
    commission: {
      totalPriceInCents,
      gatewayFeeInCents: 0,
      userCommissionInCents: totalPriceInCents,
      currency: "BRL",
    },
    isTest: false,
  };

  try {
    const res = await fetch(UTMIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-token": token,
      },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (!res.ok) {
      console.error("[utmify] erro", res.status, text.slice(0, 800));
    } else {
      console.log("[utmify] ok", input.orderId, input.status);
    }
    return { ok: res.ok, status: res.status, body: text.slice(0, 800) };
  } catch (e) {
    console.error("[utmify] exception", e);
    return { ok: false, status: 0, body: String(e) };
  }
}

export function extractTrackingFromOrder(order: Record<string, unknown> | null | undefined): UtmifyTracking {
  const t = (order?.tracking ?? {}) as Record<string, string | null | undefined>;
  const pick = (k: string) => (typeof t[k] === "string" && t[k] ? (t[k] as string) : null);
  return {
    src: pick("src"),
    sck: pick("sck"),
    utm_source: pick("utm_source"),
    utm_campaign: pick("utm_campaign"),
    utm_medium: pick("utm_medium"),
    utm_content: pick("utm_content"),
    utm_term: pick("utm_term"),
  };
}
