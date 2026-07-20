// Service para gateway Paradise Pags
// https://multi.paradisepags.com

const PARADISE_BASE = "https://multi.paradisepags.com";

function apiKey(): string {
  const key = Deno.env.get("PARADISEPAGS_SECRET_KEY");
  if (!key) throw new Error("PARADISEPAGS_SECRET_KEY not configured");
  return key;
}

export interface ParadiseCustomer {
  name: string;
  email: string;
  phone?: string;
  document?: string;
}

export interface CreateParadiseTxInput {
  amount: number; // centavos
  description: string;
  reference: string;
  postback_url: string;
  offer_link: string;
  customer: ParadiseCustomer;
}

export interface ParadiseCreateResp {
  status?: string;
  transaction_id?: number | string;
  id?: string;
  qr_code?: string;
  qr_code_base64?: string;
  amount?: number;
  acquirer?: string;
  expires_at?: string;
  message?: string;
  error?: string;
}

async function parse(resp: Response) {
  const text = await resp.text();
  let data: any;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return { ok: resp.ok, status: resp.status, data };
}

export async function createTransaction(input: CreateParadiseTxInput) {
  const resp = await fetch(`${PARADISE_BASE}/api/v1/transaction.php`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      amount: input.amount,
      description: input.description,
      reference: input.reference,
      source: "api_externa",
      offer_link: input.offer_link,
      postback_url: input.postback_url,
      customer: input.customer,
    }),
  });
  return parse(resp);
}

export async function getTransaction(transactionId: string | number) {
  const resp = await fetch(
    `${PARADISE_BASE}/api/v1/query.php?action=get_transaction&id=${encodeURIComponent(String(transactionId))}`,
    { method: "GET", headers: { "X-API-Key": apiKey(), Accept: "application/json" } },
  );
  return parse(resp);
}

export async function getTransactionByReference(reference: string) {
  const resp = await fetch(
    `${PARADISE_BASE}/api/v1/query.php?action=list_transactions&external_id=${encodeURIComponent(reference)}`,
    { method: "GET", headers: { "X-API-Key": apiKey(), Accept: "application/json" } },
  );
  return parse(resp);
}

export async function refundTransaction(transactionId: string | number) {
  const resp = await fetch(`${PARADISE_BASE}/api/v1/refund.php`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ transaction_id: Number(transactionId) }),
  });
  return parse(resp);
}

export async function getBalance() {
  const resp = await fetch(`${PARADISE_BASE}/api/v1/balance.php`, {
    method: "GET",
    headers: { "X-Secret-Key": apiKey(), Accept: "application/json" },
  });
  return parse(resp);
}

// Mapeia status da Paradise para status interno usado no sistema
export function mapParadiseStatus(s: string | undefined | null): string {
  switch ((s ?? "").toLowerCase()) {
    case "approved":
    case "completed":
    case "paid":
      return "paid";
    case "pending":
    case "processing":
    case "under_review":
      return "pending";
    case "refunded":
      return "refunded";
    case "chargeback":
      return "chargeback";
    case "failed":
    case "refused":
    case "expired":
    case "cancelled":
    case "canceled":
      return "failed";
    default:
      return "pending";
  }
}
