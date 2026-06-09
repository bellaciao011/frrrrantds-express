/**
 * Cópia robusta de texto. Funciona em navegadores in-app (TikTok WebView, Instagram, etc.)
 * onde navigator.clipboard pode falhar ou não existir.
 */
export async function copyText(text: string): Promise<boolean> {
  if (!text) return false;

  // 1) API moderna (requer https + gesto do usuário)
  try {
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function" &&
      window.isSecureContext
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // segue para fallback
  }

  // 2) Fallback clássico: textarea + execCommand("copy")
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "0";
    ta.style.opacity = "0";
    ta.style.pointerEvents = "none";
    document.body.appendChild(ta);

    // iOS WebView precisa de seleção via range
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      const range = document.createRange();
      range.selectNodeContents(ta);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      ta.setSelectionRange(0, text.length);
    } else {
      ta.select();
    }

    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
