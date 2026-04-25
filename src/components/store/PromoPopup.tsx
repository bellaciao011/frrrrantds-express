import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "promo-popup-dismissed";

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(24 * 60 * 60 - 10);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  const hh = String(Math.floor(time / 3600)).padStart(2, "0");
  const mm = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm">
        <div className="mb-3 flex items-center justify-between px-2">
          <h2 className="text-xl font-extrabold tracking-wide text-yellow-300 drop-shadow">
            COMECE 2026 EM MOVIMENTO
          </h2>
          <button
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-full text-primary"
            aria-label="Fechar"
          >
            <X className="h-7 w-7" strokeWidth={3} />
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl bg-primary p-2 shadow-2xl">
          <div className="rounded-2xl bg-background px-6 pb-8 pt-6 text-center">
            <p className="text-4xl font-extrabold text-foreground">90% OFF</p>
            <p className="mt-3 text-lg font-bold text-primary">no seu pedido!</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Você pode começar o ano com um novo hobby.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Aproveita: produtos selecionados estão com até 90% OFF.
            </p>
          </div>

          <div className="px-3 pb-3 pt-4 text-center">
            <p className="rounded-full bg-primary/80 py-2.5 text-sm font-bold text-primary-foreground">
              Termina em {hh}:{mm}:{ss}
            </p>
          </div>

          <button
            onClick={close}
            className="mx-3 mb-3 block w-[calc(100%-1.5rem)] rounded-full bg-background py-3 text-base font-extrabold text-primary shadow-lg"
          >
            Resgatar agora
          </button>
        </div>
      </div>
    </div>
  );
}
