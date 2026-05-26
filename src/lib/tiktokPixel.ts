// Helpers para disparar eventos do TikTok Pixel no client
import { supabase } from "@/integrations/supabase/client";

const STORE_SLUG = "berzerk";

interface PurchaseEventData {
  value: number; // em REAIS (não centavos)
  currency?: string;
  email?: string;
  phone?: string;
  order_id?: string;
  ttclid?: string | null;
}

/**
 * Dispara evento Purchase para todos os pixels ativos.
 * Idempotente em nível de aba: usa sessionStorage para não disparar duplicado.
 */
export async function trackPurchaseClient(data: PurchaseEventData) {
  if (typeof window === "undefined") return;

  // Evita disparo duplicado por pedido
  const key = `tt_purchase_${data.order_id ?? "anon"}`;
  if (data.order_id && sessionStorage.getItem(key)) return;

  // Aguarda o ttq estar pronto (até 5s)
  const waitForTtq = () =>
    new Promise<void>((resolve) => {
      let tries = 0;
      const id = setInterval(() => {
        tries += 1;
        if (window.ttq && typeof window.ttq.track === "function") {
          clearInterval(id);
          resolve();
        } else if (tries > 50) {
          clearInterval(id);
          resolve();
        }
      }, 100);
    });

  await waitForTtq();
  if (!window.ttq) return;

  try {
    const { data: pixels } = await supabase.rpc("get_active_pixels", {
      _store_slug: STORE_SLUG,
    });
    if (!pixels || pixels.length === 0) return;

    for (const p of pixels as Array<{ pixel_id: string }>) {
      const inst = window.ttq.instance(p.pixel_id);
      if (data.email || data.phone) {
        inst.identify({
          email: data.email,
          phone_number: data.phone,
        });
      }
      inst.track("Purchase", {
        value: data.value,
        currency: data.currency ?? "BRL",
        contents: data.order_id ? [{ content_id: data.order_id }] : undefined,
      });
    }

    if (data.order_id) sessionStorage.setItem(key, "1");
  } catch (e) {
    console.warn("[tiktok] Purchase client falhou", e);
  }
}

export function getStoredTtclid(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem("ttclid");
  } catch {
    return null;
  }
}
