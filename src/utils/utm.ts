/**
 * UTM Preserver — mantém UTMs/ttclid/fbclid/gclid entre páginas usando sessionStorage.
 */

const STORAGE_KEY = "tracking_params";

const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "ttclid",
  "fbclid",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "xcod",
  "sck",
  "src",
  "ref",
];

function readStored(): string {
  if (typeof window === "undefined") return "";
  try {
    const ls = window.localStorage.getItem(STORAGE_KEY);
    if (ls) return ls;
  } catch {
    // ignore
  }
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function writeStored(value: string) {
  if (typeof window === "undefined") return;
  // Escreve em ambos: localStorage sobrevive entre sessões do TTWebview,
  // sessionStorage é fallback se localStorage estiver bloqueado.
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
}

/** Captura UTMs/click ids da URL atual e persiste. */
export function captureTrackingParams(): URLSearchParams {
  const stored = getStoredParams();
  if (typeof window === "undefined") return stored;

  const current = new URLSearchParams(window.location.search);
  let changed = false;

  current.forEach((value, key) => {
    if (TRACKED_KEYS.includes(key.toLowerCase()) || key.toLowerCase().startsWith("utm_")) {
      if (stored.get(key) !== value) {
        stored.set(key, value);
        changed = true;
      }
    }
  });

  if (changed) {
    writeStored(stored.toString());
  }

  return stored;
}

/** Recupera params salvos. */
export function getStoredParams(): URLSearchParams {
  return new URLSearchParams(readStored());
}


/**
 * Anexa UTMs/click ids (URL atual + sessionStorage) a uma URL de destino.
 */
export function getUrlWithUtm(url: string): string {
  if (typeof window === "undefined") return url;

  captureTrackingParams();
  const stored = getStoredParams();
  if ([...stored.keys()].length === 0) return url;

  const [path, existingQs = ""] = url.split("?");
  const merged = new URLSearchParams(existingQs);
  stored.forEach((value, key) => {
    if (!merged.has(key)) merged.set(key, value);
  });

  const qs = merged.toString();
  return qs ? `${path}?${qs}` : path;
}

/** Retorna apenas os tracking params relevantes para a Utmify. */
export function getUtmifyTracking(): {
  src: string | null;
  sck: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_medium: string | null;
  utm_content: string | null;
  utm_term: string | null;
} {
  captureTrackingParams();
  const stored = getStoredParams();
  const pick = (k: string) => (stored.get(k) ? stored.get(k) : null);
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
