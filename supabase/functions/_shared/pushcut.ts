// Helper para enviar notificações Pushcut quando há pedidos pendentes ou pagos.
// Envia apenas o valor e o status (PENDENTE ou PAGO).

const PUSHCUT_URLS = [
  "https://api.pushcut.io/X9xKfW5bzBgl-4eepzzA-/notifications/MinhaNotifica%C3%A7%C3%A3o",
  "https://api.pushcut.io/c3YAZgmhSw1D_Mi11z0k4/notifications/tiktok",
];

export type OrderStage = "pending" | "paid";

function formatBRL(amountInCents: number): string {
  const reais = (amountInCents / 100).toFixed(2).replace(".", ",");
  return `R$ ${reais}`;
}

export async function sendPushcutOrderNotification(opts: {
  stage: OrderStage;
  amount: number; // centavos
  // Campos abaixo aceitos por compatibilidade, mas ignorados na notificação.
  storeSlug?: string | null;
  buyerName?: string | null;
  externalId?: string | null;
}): Promise<void> {
  const valor = formatBRL(opts.amount);
  const stageLabel = opts.stage === "paid" ? "PAGO" : "PENDENTE";

  const title = `${valor} • ${stageLabel}`;
  const body = JSON.stringify({ title });

  await Promise.allSettled(
    PUSHCUT_URLS.map((url) =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      })
        .then(async (r) => {
          if (!r.ok) {
            const txt = await r.text().catch(() => "");
            console.error("[pushcut] failed", url, r.status, txt);
          } else {
            console.log("[pushcut] sent", { url, title });
          }
        })
        .catch((e) => console.error("[pushcut] error", url, String(e))),
    ),
  );
}
