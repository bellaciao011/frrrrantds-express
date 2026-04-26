// Helper para enviar notificações Pushcut quando há pedidos pendentes ou pagos.
// Dispara DOIS webhooks em paralelo (notificação principal + tiktok).

const PUSHCUT_URLS = [
  "https://api.pushcut.io/X9xKfW5bzBgl-4eepzzA-/notifications/MinhaNotifica%C3%A7%C3%A3o",
  "https://api.pushcut.io/c3YAZgmhSw1D_Mi11z0k4/notifications/tiktok",
];

export type OrderStage = "pending" | "paid";

// Mapeia o store_slug para um label amigável.
// melissa = loja principal (Front). up1/up2 = upsells.
function slugToLabel(slug: string | null | undefined): string {
  const s = (slug ?? "melissa").toLowerCase();
  if (s === "up1") return "UP1";
  if (s === "up2") return "UP2";
  return "Front";
}

function formatBRL(amountInCents: number): string {
  const reais = (amountInCents / 100).toFixed(2).replace(".", ",");
  return `R$ ${reais}`;
}

export async function sendPushcutOrderNotification(opts: {
  stage: OrderStage;
  amount: number; // centavos
  storeSlug?: string | null;
  buyerName?: string | null;
  externalId?: string | null;
}): Promise<void> {
  const label = slugToLabel(opts.storeSlug);
  const valor = formatBRL(opts.amount);
  const stageLabel = opts.stage === "paid" ? "PAGO" : "PENDENTE";

  const title = `${label} • ${stageLabel}`;
  const text = [
    `${valor}`,
    opts.buyerName ? `Cliente: ${opts.buyerName}` : null,
    opts.externalId ? `#${opts.externalId}` : null,
  ]
    .filter(Boolean)
    .join(" — ");

  const body = JSON.stringify({ title, text });

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
