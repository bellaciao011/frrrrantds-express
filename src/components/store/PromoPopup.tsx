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
      <div className="relative w-full max-w-[280px]">
        <button
          onClick={close}
          className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full text-primary"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" strokeWidth={3} />
        </button>

        <div className="overflow-hidden rounded-2xl bg-primary p-1.5 shadow-2xl">
          <div className="rounded-xl bg-background px-4 pb-5 pt-4 text-center">
            <p className="text-2xl font-extrabold text-foreground">80% OFF</p>
            <p className="mt-1.5 text-sm font-bold text-primary">no seu pedido!</p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/80">
              Você pode começar o ano com um novo hobby.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
              Aproveita: produtos selecionados estão com até 80% OFF.
            </p>
          </div>

          <div className="px-2 pb-2 pt-3 text-center">
            <p className="rounded-full bg-primary/80 py-1.5 text-xs font-bold text-primary-foreground">
              Termina em {hh}:{mm}:{ss}
            </p>
          </div>

          <button
            onClick={close}
            className="mx-2 mb-2 block w-[calc(100%-1rem)] rounded-full bg-background py-2.5 text-sm font-extrabold text-primary shadow-lg"
          >
            Resgatar agora
          </button>
        </div>
      </div>
    </div>
  );
}

