// Service para gateway FreePay Brasil
// https://api.freepaybrasil.com

const FREEPAY_BASE = "https://api.freepaybrasil.com";

function authHeader(): string {
  const pub = Deno.env.get("FREEPAY_PUBLIC_KEY");
  const sec = Deno.env.get("FREEPAY_SECRET_KEY");
  if (!pub || !sec) throw new Error("FreePay credentials not configured");
  const token = btoa(`${pub}:${sec}`);
  return `Basic ${token}`;
}

export interface FreepayCustomer {
  name: string;
  email: string;
  document: { number: string; type: "cpf" | "cnpj" };
  phone?: string;
}

export interface FreepayItem {
  title: string;
  unit_price: number; // centavos
  quantity: number;
  tangible: boolean;
}

export interface CreateTransactionInput {
  amount: number; // centavos
  payment_method: "pix" | "credit_card" | "boleto";
  postback_url: string;
  metadata?: Record<string, unknown>;
  customer: FreepayCustomer;
  items: FreepayItem[];
  pix?: { expires_in_days: number };
  boleto?: { expires_in_days: number };
  card?: {
    number: string;
    holder_name: string;
    expiration_month: number;
    expiration_year: number;
    cvv: string;
  };
  installments?: number;
}

export async function createTransaction(input: CreateTransactionInput) {
  const resp = await fetch(`${FREEPAY_BASE}/v1/payment-transaction/create`, {
    method: "POST",
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ request: input, metadata: input.metadata ?? {} }),
  });
  const text = await resp.text();
  let data: any;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { ok: resp.ok, status: resp.status, data };
}

export async function getTransaction(id: string) {
  const resp = await fetch(`${FREEPAY_BASE}/v1/payment-transaction/info/${id}`, {
    method: "GET",
    headers: { Authorization: authHeader(), Accept: "application/json" },
  });
  const text = await resp.text();
  let data: any;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { ok: resp.ok, status: resp.status, data };
}

export async function refundTransaction(id: string) {
  const resp = await fetch(`${FREEPAY_BASE}/v1/payment-transaction/${id}/refund`, {
    method: "POST",
    headers: { Authorization: authHeader(), Accept: "application/json" },
  });
  const text = await resp.text();
  let data: any;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { ok: resp.ok, status: resp.status, data };
}

// Mapeia status do webhook FreePay para status interno
export function mapFreepayStatus(s: string | undefined | null): string {
  switch ((s ?? "").toUpperCase()) {
    case "PAID": return "paid";
    case "PENDING": return "pending";
    case "REFUNDED": return "refunded";
    case "REFUSED":
    case "EXPIRED":
    case "ERROR": return "failed";
    case "CHARGEBACK":
    case "PRECHARGEBACK": return "chargeback";
    default: return "pending";
  }
}
