// Helpers para disparar eventos do TikTok Pixel no client
import { supabase } from "@/integrations/supabase/client";

const STORE_SLUG = "berzerk";

export interface TikTokContent {
  content_id: string;
  content_type?: "product" | "product_group";
  content_name?: string;
  quantity?: number;
  price?: number;
}

interface BaseEventProps {
  value?: number;
  currency?: string;
  contents?: TikTokContent[];
  description?: string;
  query?: string;
  order_id?: string;
}

interface IdentifyData {
  email?: string;
  phone?: string;
  external_id?: string;
}

async function getActivePixels() {
  const { data } = await supabase.rpc("get_active_pixels", {
    _store_slug: STORE_SLUG,
  });
  return (data ?? []) as Array<{ pixel_id: string }>;
}

function waitForTtq(): Promise<void> {
  return new Promise((resolve) => {
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
}

/**
 * Dispara um evento TikTok para todos os pixels ativos.
 * Idempotente por (eventName + dedupKey) na sessão.
 */
export async function trackEvent(
  eventName: string,
  props: BaseEventProps = {},
  identify?: IdentifyData,
  dedupKey?: string,
) {
  if (typeof window === "undefined") return;

  const sessionKey = dedupKey
    ? `tt_${eventName}_${dedupKey}`
    : null;
  if (sessionKey && sessionStorage.getItem(sessionKey)) return;

  await waitForTtq();
  if (!window.ttq) return;

  try {
    const pixels = await getActivePixels();
    if (pixels.length === 0) return;

    // event_id consistente para deduplicação com server-side
    const event_id = props.order_id
      ? `${eventName.toLowerCase()}_${props.order_id}`
      : undefined;

    const payload: Record<string, unknown> = {
      ...(props.value !== undefined ? { value: Number(props.value) } : {}),
      currency: props.currency ?? "BRL",
      ...(props.contents ? { contents: props.contents } : {}),
      ...(props.description ? { description: props.description } : {}),
      ...(props.query ? { query: props.query } : {}),
      ...(props.order_id ? { order_id: props.order_id } : {}),
      ...(event_id ? { event_id } : {}),
    };

    for (const p of pixels) {
      const inst = window.ttq.instance(p.pixel_id);
      if (identify && (identify.email || identify.phone || identify.external_id)) {
        inst.identify({
          email: identify.email,
          phone_number: identify.phone,
          external_id: identify.external_id,
        });
      }
      inst.track(eventName, payload, event_id ? { event_id } : undefined);
    }

    if (sessionKey) sessionStorage.setItem(sessionKey, "1");
  } catch (e) {
    console.warn(`[tiktok] ${eventName} falhou`, e);
  }
}

// ---------- Helpers específicos ----------

export function trackViewContent(p: {
  content_id: string;
  content_name?: string;
  price: number;
  currency?: string;
}) {
  return trackEvent(
    "ViewContent",
    {
      value: p.price,
      currency: p.currency ?? "BRL",
      contents: [
        {
          content_id: p.content_id,
          content_type: "product",
          content_name: p.content_name,
          quantity: 1,
          price: p.price,
        },
      ],
      description: p.content_name,
    },
    undefined,
    `view_${p.content_id}`,
  );
}

export function trackAddToCart(p: {
  content_id: string;
  content_name?: string;
  price: number;
  quantity?: number;
}) {
  return trackEvent("AddToCart", {
    value: p.price * (p.quantity ?? 1),
    currency: "BRL",
    contents: [
      {
        content_id: p.content_id,
        content_type: "product",
        content_name: p.content_name,
        quantity: p.quantity ?? 1,
        price: p.price,
      },
    ],
    description: p.content_name,
  });
}

export function trackInitiateCheckout(p: {
  value: number;
  contents: TikTokContent[];
}) {
  return trackEvent("InitiateCheckout", {
    value: p.value,
    currency: "BRL",
    contents: p.contents,
  });
}

export function trackAddPaymentInfo(p: {
  value: number;
  contents: TikTokContent[];
  order_id?: string;
  identify?: IdentifyData;
}) {
  return trackEvent(
    "AddPaymentInfo",
    {
      value: p.value,
      currency: "BRL",
      contents: p.contents,
      order_id: p.order_id,
    },
    p.identify,
    p.order_id,
  );
}

interface PurchaseEventData {
  value: number;
  currency?: string;
  email?: string;
  phone?: string;
  order_id?: string;
  ttclid?: string | null;
  contents?: TikTokContent[];
  description?: string;
}

/**
 * Dispara Purchase com event_id para deduplicação com server-side.
 */
export async function trackPurchaseClient(data: PurchaseEventData) {
  return trackEvent(
    "Purchase",
    {
      value: data.value,
      currency: data.currency ?? "BRL",
      contents:
        data.contents ??
        (data.order_id
          ? [{ content_id: data.order_id, content_type: "product" }]
          : undefined),
      description: data.description,
      order_id: data.order_id,
    },
    {
      email: data.email,
      phone: data.phone,
      external_id: data.order_id,
    },
    data.order_id,
  );
}

export function getStoredTtclid(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem("ttclid");
  } catch {
    return null;
  }
}
