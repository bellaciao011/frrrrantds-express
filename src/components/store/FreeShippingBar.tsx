import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";

const TARGET = 120;

export function FreeShippingBar() {
  const { total } = useCart();
  const [time, setTime] = useState(20 * 60);

  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(time / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");
  const remaining = Math.max(0, TARGET - total);
  const pct = Math.min(100, (total / TARGET) * 100);

  return (
    <section className="mx-auto mt-3 max-w-5xl px-3">
      <div className="border-b border-t bg-background px-1 py-4">
        <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="text-foreground/70">Oferta termina em</span>
          <span className="rounded-full bg-foreground px-2.5 py-0.5 font-mono text-xs font-bold text-background">
            {mm}:{ss}
          </span>
        </div>
        <p className="text-sm font-bold">
          {remaining > 0
            ? `Faltam ${formatBRL(remaining)} para liberar o frete gratis.`
            : "Frete grátis liberado! 🎉"}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatBRL(total)} / {formatBRL(TARGET)}
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <button
          disabled={remaining > 0}
          className="mt-3 w-full rounded-sm bg-muted py-2.5 text-sm font-semibold text-foreground/60 disabled:opacity-60"
        >
          Resgatar frete gratis
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-shipping-fg/20 bg-shipping-bg/40 p-3">
          <p className="text-sm font-bold text-shipping-fg">Cupom de frete grátis</p>
          <p className="text-xs text-shipping-fg/80">Sem gasto mínimo</p>
          <button className="mt-2 rounded-full bg-foreground/10 px-4 py-1 text-xs font-semibold">
            Resgatar
          </button>
        </div>
        <div className="rounded-xl border border-discount-fg/20 bg-discount-bg/40 p-3">
          <p className="text-sm font-bold text-discount-fg">Até 85% OFF</p>
          <p className="text-xs text-discount-fg/80">Em produtos selecionados</p>
          <button className="mt-2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
            Resgatar
          </button>
        </div>
      </div>
    </section>
  );
}
