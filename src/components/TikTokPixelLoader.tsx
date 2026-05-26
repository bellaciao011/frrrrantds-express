import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    ttq?: any;
    TiktokAnalyticsObject?: string;
  }
}

const STORE_SLUG = "berzerk";

/**
 * Carrega o SDK do TikTok no navegador para todos os pixels ativos da loja.
 * Captura ttclid da URL e salva em sessionStorage.
 */
export default function TikTokPixelLoader() {
  useEffect(() => {
    // 1) Captura ttclid da URL e salva (persistente por sessão)
    try {
      const url = new URL(window.location.href);
      const ttclid = url.searchParams.get("ttclid");
      if (ttclid) {
        sessionStorage.setItem("ttclid", ttclid);
      }
    } catch {
      // ignore
    }

    // 2) Busca pixels ativos e carrega o SDK
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.rpc("get_active_pixels", {
        _store_slug: STORE_SLUG,
      });
      if (cancelled || error || !data || data.length === 0) return;

      const pixelIds: string[] = (data as Array<{ pixel_id: string }>).map(
        (p) => p.pixel_id,
      );

      bootstrapTikTokSDK(pixelIds);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

function bootstrapTikTokSDK(pixelIds: string[]) {
  if (typeof window === "undefined" || pixelIds.length === 0) return;

  // Snippet oficial do TikTok adaptado
  /* eslint-disable */
  (function (w: any, d: Document, t: string) {
    w.TiktokAnalyticsObject = t;
    const ttq: any = (w[t] = w[t] || []);
    ttq.methods = [
      "page", "track", "identify", "instances", "debug", "on", "off",
      "once", "ready", "alias", "group", "enableCookie", "disableCookie",
      "holdConsent", "revokeConsent", "grantConsent",
    ];
    ttq.setAndDefer = function (target: any, method: string) {
      target[method] = function (...args: any[]) {
        target.push([method, ...args]);
      };
    };
    for (const m of ttq.methods) ttq.setAndDefer(ttq, m);
    ttq.instance = function (id: string) {
      const inst = ttq._i[id] || [];
      for (const m of ttq.methods) ttq.setAndDefer(inst, m);
      return inst;
    };
    ttq.load = function (id: string, opts?: any) {
      const url = "https://analytics.tiktok.com/i18n/pixel/events.js";
      const cdn = "https://analytics.tiktok.com/i18n/pixel/static/";
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._i[id]._u = cdn;
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[id] = opts || {};
      const script = d.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `${url}?sdkid=${id}&lib=${t}`;
      const first = d.getElementsByTagName("script")[0];
      first.parentNode?.insertBefore(script, first);
    };
  })(window, document, "ttq");
  /* eslint-enable */

  // Carrega cada pixel
  for (const pid of pixelIds) {
    window.ttq.load(pid);
    window.ttq.page();
  }
}
