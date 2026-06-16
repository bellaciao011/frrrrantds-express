import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export function FreeShippingBar() {
  const [time, setTime] = useState(20 * 60);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(time / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");

  const fireConfetti = () => {
    const colors = ["#ff5a8a", "#f6c453", "#5ad2a8", "#5aa9ff", "#c084fc"];
    const burst = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 120,
        spread: 90,
        startVelocity: 45,
        scalar: 0.9,
        ticks: 200,
        origin,
        colors,
      });
    burst({ x: 0.2, y: 0.3 });
    burst({ x: 0.8, y: 0.3 });
    setTimeout(() => burst({ x: 0.5, y: 0.2 }), 150);
  };

  const handleClaim = () => {
    fireConfetti();
    setClaimed(true);
  };

  return (
    <section className="mx-auto mt-3 max-w-5xl px-3">
      <div className="border-b border-t bg-background px-1 py-3">
        <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="text-foreground/70">Oferta termina em</span>
          <span className="rounded-full bg-foreground px-2.5 py-0.5 font-mono text-xs font-bold text-background">
            {mm}:{ss}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-shipping-fg/20 bg-shipping-bg/40 p-3">
            <p className="text-sm font-bold text-shipping-fg">Cupom de frete grátis</p>
            <p className="text-xs text-shipping-fg/80">Sem gasto mínimo</p>
            {claimed ? (
              <button
                disabled
                className="mt-2 inline-flex items-center gap-1 rounded-full bg-shipping-fg px-4 py-1 text-xs font-semibold text-background"
              >
                Resgatado ✓
              </button>
            ) : (
              <button
                onClick={handleClaim}
                className="mt-2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground"
              >
                Resgatar
              </button>
            )}
          </div>
          <div className="rounded-xl border border-discount-fg/20 bg-discount-bg/40 p-3">
            <p className="text-sm font-bold text-discount-fg">Até 90% OFF</p>
            <p className="text-xs text-discount-fg/80">Em produtos selecionados</p>
            {claimed ? (
              <button
                disabled
                className="mt-2 inline-flex items-center gap-1 rounded-full bg-discount-fg px-4 py-1 text-xs font-semibold text-background"
              >
                Resgatado ✓
              </button>
            ) : (
              <button
                onClick={handleClaim}
                className="mt-2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground"
              >
                Resgatar
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
