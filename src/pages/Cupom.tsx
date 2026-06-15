import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Flame, ShieldCheck, Ticket, Truck, Music2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { getUrlWithUtm } from "@/utils/utm";

function useCountdown(seconds: number) {
  const [t, setT] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setT((x) => (x > 0 ? x - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(t / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

const FLAG_COLORS = ["#ef4444", "#facc15", "#22c55e", "#3b82f6", "#ffffff", "#f97316", "#ec4899"];

function Bunting() {
  const flags = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 select-none overflow-hidden">
      <svg viewBox="0 0 400 20" className="block w-full" preserveAspectRatio="none">
        <path d="M0 4 Q200 22 400 4" stroke="#fde68a" strokeWidth="0.6" fill="none" opacity="0.7" />
      </svg>
      <div className="-mt-1 flex justify-between px-1">
        {flags.map((_, i) => (
          <span
            key={i}
            className="block h-5 w-3 origin-top"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: FLAG_COLORS[i % FLAG_COLORS.length],
              animation: `flagSway 2.4s ease-in-out ${i * 0.12}s infinite`,
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, i) => {
        const top = (i * 173) % 100;
        const left = (i * 91) % 100;
        const size = (i % 3) + 1;
        const delay = (i % 7) * 0.4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-yellow-200"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.6,
              animation: `twinkle 3s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function FireBg() {
  // textura sutil de chamas atrás do banner 90% OFF
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 100" preserveAspectRatio="none">
      <defs>
        <radialGradient id="flame" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="60%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="100" rx="35" ry="60" fill="url(#flame)" />
      <ellipse cx="100" cy="100" rx="50" ry="80" fill="url(#flame)" />
      <ellipse cx="160" cy="100" rx="35" ry="55" fill="url(#flame)" />
    </svg>
  );
}

export default function CupomPage() {
  const countdown = useCountdown(9 * 60 + 59);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1437] via-[#1a0b3a] to-[#3b0a2e] px-4 pb-10 pt-10">
      <Helmet>
        <title>Cupom de São João — até 90% OFF | Meijile</title>
        <meta name="description" content="Você foi selecionado para receber o Cupom de São João com até 90% de desconto." />
      </Helmet>

      {/* keyframes locais */}
      <style>{`
        @keyframes flagSway { 0%,100% { transform: rotate(-6deg);} 50% { transform: rotate(6deg);} }
        @keyframes twinkle { 0%,100% { opacity: .2;} 50% { opacity: .9;} }
        @keyframes float { 0%,100% { transform: translateY(0) rotate(-4deg);} 50% { transform: translateY(-8px) rotate(4deg);} }
        @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(250,204,21,.55);} 50% { box-shadow: 0 0 0 14px rgba(250,204,21,0);} }
      `}</style>

      <Stars />
      <Bunting />

      {/* Elementos decorativos flutuantes */}
      <span className="pointer-events-none absolute left-2 top-32 text-4xl opacity-30" style={{ animation: "float 5s ease-in-out infinite" }}>🌽</span>
      <span className="pointer-events-none absolute right-3 top-40 text-4xl opacity-30" style={{ animation: "float 6s ease-in-out 1s infinite" }}>🎈</span>
      <span className="pointer-events-none absolute left-4 bottom-32 text-4xl opacity-25" style={{ animation: "float 5.5s ease-in-out .5s infinite" }}>🪕</span>
      <span className="pointer-events-none absolute right-4 bottom-40 text-3xl opacity-25" style={{ animation: "float 6.5s ease-in-out 1.5s infinite" }}>🎆</span>

      <div className="relative z-20 mx-auto max-w-md">
        {/* Selo */}
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase text-amber-900 shadow-lg">
          <Flame className="h-4 w-4 fill-orange-500 text-orange-600" /> Você foi selecionado
        </div>

        {/* Card cupom com borda xadrez */}
        <div
          className="relative overflow-hidden rounded-3xl bg-white p-1 shadow-2xl"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#dc2626 0 25%, #ffffff 0 50%)",
            backgroundSize: "14px 14px",
          }}
        >
          <div className="relative rounded-[20px] bg-white p-6 text-center">
            {/* recortes laterais */}
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a0b3a]" />
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a0b3a]" />

            {/* Ícone fogueira */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 text-white shadow-lg">
              <Flame className="h-10 w-10 fill-yellow-100" strokeWidth={1.5} />
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight text-foreground">
              <span aria-hidden className="mx-1 inline-block">🎏</span>
              Cupom de <span className="text-red-600">São João</span>
              <span aria-hidden className="mx-1 inline-block">🎏</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Você foi selecionado para receber um cupom exclusivo
            </p>

            {/* Banner 90% OFF com textura de chamas */}
            <div className="relative my-5 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 px-4 py-5 text-white shadow-inner">
              <FireBg />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-95">Desconto de até</p>
                <p className="text-5xl font-black leading-none drop-shadow-md">90% OFF</p>
                <p className="mt-1 text-xs opacity-95">em qualquer produto da loja</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm font-bold text-red-600">
              <Flame className="h-4 w-4 fill-orange-400" />
              <span>Expira em {countdown}</span>
            </div>

            <button
              type="button"
              onClick={handleClaim}
              disabled={claiming}
              ref={btnRef}
              className="mt-5 block w-full rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition-transform active:scale-[0.98] disabled:opacity-90"
              style={{ animation: claiming ? "btnBounce .5s ease-out" : "glowPulse 2s ease-in-out infinite" }}
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Flame className="h-5 w-5 fill-yellow-200" /> Garantir Cupom
                <Ticket className="h-5 w-5" />
              </span>
            </button>


            <p className="mt-3 text-[11px] text-muted-foreground">
              *Desconto aplicado automaticamente no carrinho
            </p>
          </div>
        </div>

        {/* Trust badges temáticos */}
        <ul className="mt-5 space-y-2 text-sm">
          <li className="flex items-center gap-2 rounded-xl border border-amber-200/30 bg-white/95 px-3 py-2 shadow">
            <span className="relative">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <Flame className="absolute -right-1 -top-1 h-3 w-3 fill-orange-500 text-orange-600" />
            </span>
            <span>Pagamento 100% seguro</span>
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-amber-200/30 bg-white/95 px-3 py-2 shadow">
            <Truck className="h-5 w-5 text-amber-600" />
            <span>Frete grátis para todo o Brasil</span>
            <span className="ml-auto text-lg">🎈</span>
          </li>
          <li className="flex items-center gap-2 rounded-xl border border-amber-200/30 bg-white/95 px-3 py-2 shadow">
            <Flame className="h-5 w-5 fill-orange-400 text-red-600" />
            <span>Cupom válido apenas hoje</span>
            <Music2 className="ml-auto h-4 w-4 text-amber-600" />
          </li>
        </ul>

        <p className="mt-6 text-center text-[11px] text-amber-100/70">
          © Meijile — Arraiá de ofertas por tempo limitado
        </p>
      </div>
    </div>
  );
}
