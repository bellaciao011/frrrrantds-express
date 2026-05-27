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

function safeStorage(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Captura UTMs/click ids da URL atual e persiste em sessionStorage. */
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
    const storage = safeStorage();
    storage?.setItem(STORAGE_KEY, stored.toString());
  }

  return stored;
}

/** Recupera params salvos em sessionStorage. */
export function getStoredParams(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  const storage = safeStorage();
  const raw = storage?.getItem(STORAGE_KEY) ?? "";
  return new URLSearchParams(raw);
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
