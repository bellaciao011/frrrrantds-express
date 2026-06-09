import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  Zap,
  ShieldCheck,
  RotateCcw,
  Lock,
  Truck,
  BadgeCheck,
  Mail,
  Phone,
  Flame,
  Truck as TruckIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL, products } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";
import { trackAddToCart, trackInitiateCheckout } from "@/lib/tiktokPixel";

function useRandomProducts(count: number, excludeIds: string[]) {
  return useMemo(() => {
    const pool = products.filter((p) => !excludeIds.includes(p.id));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, excludeIds.join(",")]);
}

function RecommendedSection({ excludeIds }: { excludeIds: string[] }) {
  const { add } = useCart();
  const recommended = useRandomProducts(4, excludeIds);
  return (
    <div className="mt-3 rounded-2xl bg-background p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <Flame className="h-5 w-5 text-orange-500" />
        <h2 className="text-base font-bold">Aproveite e leve também</h2>
      </div>
      <div className="space-y-3">
        {recommended.map((p) => {
          const off = Math.round(100 - (p.price / p.originalPrice) * 100);
          return (
            <div key={p.id} className="flex items-center gap-3">
              <Link to={`/produto/${p.id}`} className="shrink-0">
                <img src={p.image} alt={p.name} className="h-16 w-16 rounded-lg border object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/produto/${p.id}`}>
                  <p className="truncate text-sm font-medium">{p.name}</p>
                </Link>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {off}% OFF
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    {formatBRL(p.originalPrice)}
                  </span>
                </div>
                <p className="mt-0.5 text-base font-bold text-foreground">{formatBRL(p.price)}</p>
              </div>
              <button
                onClick={() => {
                  add(p);
                  trackAddToCart({ content_id: p.id, content_name: p.name, price: p.price, quantity: 1 });
                }}
                aria-label="Adicionar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-md active:scale-95"
              >
                <Plus className="h-5 w-5" strokeWidth={3} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CarrinhoPage() {
  const { items, remove, setQty, total } = useCart();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [people] = useState(() => 45 + Math.floor(Math.random() * 20));
  useEffect(() => setMounted(true), []);
  const excludeIds = items.map((i) => i.id);
  const originalTotal = items.reduce((s, i) => s + i.originalPrice * i.quantity, 0);
  const savings = originalTotal - total;

  return (
    <div className="min-h-screen bg-[#f5f5f7] pb-32">
      <Helmet>
        <title>Meu Carrinho — Olympikus</title>
      </Helmet>

      {/* Header gradient */}
      <header className="relative bg-gradient-to-r from-rose-500 to-rose-400 px-4 pb-5 pt-3 text-white">
        <button
          onClick={() => window.history.back()}
          aria-label="Voltar"
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold">Meu Carrinho</h1>
          <p className="text-xs opacity-90">
            {items.length} {items.length === 1 ? "item selecionado" : "itens selecionados"}
          </p>
        </div>
      </header>

      {/* Status row */}
      <div className="mx-3 -mt-3 flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </span>
          <p className="text-xs text-foreground">
            <span className="font-bold">{people}</span>{" "}
            <span className="text-muted-foreground">pessoas comprando agora</span>
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
          <TruckIcon className="h-3.5 w-3.5" />
          FRETE GRÁTIS
        </div>
      </div>

      <div className="mx-3 mt-3 space-y-3">
        {items.length === 0 ? (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-full bg-rose-500 px-6 py-2 text-sm font-semibold text-white"
            >
              Ver produtos
            </Link>
          </div>
        ) : (
          <>
            {/* Seller */}
            <div className="flex items-center gap-2 px-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-white">
                <img
                  src="https://abrilchegou.shop/tenis/img/logo.png"
                  alt="Olympikus"
                  className="h-7 w-7 object-contain"
                  onError={(e) => ((e.currentTarget.style.display = "none"))}
                />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Olympikus</p>
                <p className="flex items-center gap-1 text-[11px] text-sky-600">
                  <BadgeCheck className="h-3 w-3" /> Loja Verificada
                </p>
              </div>
            </div>

            {/* Items */}
            {items.map((item) => {
              const off = Math.round(100 - (item.price / item.originalPrice) * 100);
              return (
                <div
                  key={item.id + (item.size ?? "")}
                  className="relative rounded-2xl bg-white p-3 shadow-sm"
                >
                  <span className="absolute -left-1 top-3 z-10 rounded-r-md bg-rose-500 px-2 py-0.5 text-[11px] font-bold text-white shadow">
                    {off}% OFF
                  </span>
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="line-clamp-2 text-sm font-semibold leading-snug">
                        {item.name}
                        {item.size && ` (Tam ${item.size})`}
                      </p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-rose-500">
                          {formatBRL(item.price)}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          {formatBRL(item.originalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t pt-3">
                    <button
                      onClick={() => remove(item.id)}
                      aria-label="Remover"
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-3 rounded-full border bg-white px-1 py-1">
                      <button
                        onClick={() =>
                          item.quantity > 1 ? setQty(item.id, item.quantity - 1) : remove(item.id)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-5 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => setQty(item.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Savings */}
            {savings > 0 && (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-emerald-800">Você está economizando</p>
                  <p className="text-lg font-extrabold text-emerald-700">{formatBRL(savings)}</p>
                </div>
              </div>
            )}

            {/* Customer protection */}
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sky-600" />
                <h3 className="text-sm font-bold">Proteção ao Consumidor</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: RotateCcw, label: "Devolução grátis em 7 dias" },
                  { icon: ShieldCheck, label: "Reembolso garantido" },
                  { icon: Lock, label: "Pagamento 100% seguro" },
                  { icon: Truck, label: "Rastreio em tempo real" },
                ].map((it) => (
                  <div
                    key={it.label}
                    className="flex items-center gap-2 rounded-xl bg-muted/40 p-2.5"
                  >
                    <it.icon className="h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-[11px] leading-tight">{it.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {mounted && <RecommendedSection excludeIds={excludeIds} />}

            {/* Seller footer */}
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-base font-bold">Olympikus</p>
              <p className="mt-1 text-xs text-muted-foreground">CNPJ: 63.805.779/0001-32</p>
              <p className="text-xs text-muted-foreground">Rua das Palmeiras, 482 - São Paulo/SP</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" /> contato@olympikus.com.br
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 text-rose-500" /> (11) 94837-2156
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">
                Total ({items.length} {items.length === 1 ? "item" : "itens"})
              </p>
              {savings > 0 && (
                <p className="text-xs font-semibold text-emerald-600">
                  Economize {formatBRL(savings)}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold text-rose-500">{formatBRL(total)}</span>
            </div>
          </div>
          <button
            onClick={() => {
              trackInitiateCheckout({
                value: total,
                contents: items.map((i) => ({
                  content_id: i.id,
                  content_type: "product",
                  content_name: i.name,
                  quantity: i.quantity,
                  price: i.price,
                })),
              });
              navigate(getUrlWithUtm("/checkout"));
            }}
            className="mt-2 w-full rounded-full bg-rose-500 py-3.5 text-sm font-bold text-white shadow-md active:scale-[0.99]"
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}
