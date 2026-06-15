import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Gift, Sparkles, Clock, ShieldCheck, Ticket } from "lucide-react";
import { useEffect, useState } from "react";
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

export default function CupomPage() {
  const countdown = useCountdown(9 * 60 + 59);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 px-4 py-6">
      <Helmet>
        <title>Cupom de São João — até 90% OFF | Meijile</title>
        <meta name="description" content="Você foi selecionado para receber o Cupom de São João com até 90% de desconto." />
      </Helmet>

      <div className="mx-auto max-w-md">
        {/* Selo selecionado */}
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
          <Sparkles className="h-3.5 w-3.5" /> VOCÊ FOI SELECIONADO
        </div>

        {/* Card cupom */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-rose-400 bg-white p-6 text-center shadow-xl">
          {/* recortes nas laterais */}
          <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-orange-50" />
          <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-orange-50" />

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-lg">
            <Gift className="h-8 w-8" />
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-foreground">
            Cupom de <span className="text-rose-600">São João</span> 🎉
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Você foi selecionado para receber um cupom exclusivo
          </p>

          <div className="my-5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 px-4 py-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-90">Desconto de até</p>
            <p className="text-5xl font-black leading-none">90% OFF</p>
            <p className="mt-1 text-xs opacity-90">em qualquer produto da loja</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-rose-600">
            <Clock className="h-4 w-4" />
            <span>Expira em {countdown}</span>
          </div>

          <Link
            to={getUrlWithUtm("/")}
            className="mt-5 block w-full rounded-full bg-gradient-to-r from-rose-600 to-orange-500 py-4 text-base font-extrabold uppercase text-white shadow-lg active:scale-[0.98]"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <Ticket className="h-5 w-5" /> Garantir Cupom
            </span>
          </Link>

          <p className="mt-3 text-[11px] text-muted-foreground">
            *Desconto aplicado automaticamente no carrinho
          </p>
        </div>

        {/* Selos de confiança */}
        <ul className="mt-5 space-y-2 text-sm">
          <li className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span>Pagamento 100% seguro</span>
          </li>
          <li className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span>Frete grátis para todo o Brasil</span>
          </li>
          <li className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
            <Gift className="h-5 w-5 text-rose-500" />
            <span>Cupom válido apenas hoje</span>
          </li>
        </ul>

        <p className="mt-6 text-center text-[11px] text-muted-foreground">
          © Meijile — Promoção por tempo limitado
        </p>
      </div>
    </div>
  );
}
