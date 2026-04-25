import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL, products } from "@/data/products";

export const Route = createFileRoute("/carrinho")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Carrinho — Melissa" }] }),
});

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
  const recommended = useRandomProducts(10, excludeIds);
  return (
    <div className="mt-4">
      <h2 className="mb-3 text-base font-bold">Você também pode gostar</h2>
      <div className="space-y-2">
        {recommended.map((p) => {
          const off = Math.round(100 - (p.price / p.originalPrice) * 100);
          return (
            <div key={p.id} className="flex gap-3 rounded-xl bg-background p-3">
              <Link to="/produto/$id" params={{ id: p.id }} className="shrink-0">
                <img src={p.image} alt={p.name} className="h-20 w-20 rounded-lg object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <Link to="/produto/$id" params={{ id: p.id }}>
                  <p className="line-clamp-2 text-sm font-medium">{p.name}</p>
                </Link>
                <div className="mt-1 flex gap-1">
                  <span className="rounded bg-discount-bg px-1.5 py-0.5 text-[10px] font-bold text-discount-fg">-{off}%</span>
                  <span className="rounded bg-shipping-bg px-1.5 py-0.5 text-[10px] font-bold text-shipping-fg">Frete grátis</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>5.0 | 100 vendido(s)</span>
                </div>
                <div className="mt-auto flex items-end justify-between pt-1">
                  <div>
                    <p className="font-bold text-price">{formatBRL(p.price)}</p>
                    <p className="text-xs text-muted-foreground line-through">{formatBRL(p.originalPrice)}</p>
                  </div>
                  <button
                    onClick={() => add(p)}
                    className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                  >
                    <ShoppingCart className="h-3 w-3" /> Adicionar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CartPage() {
  const { items, remove, setQty, total, add } = useCart();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const excludeIds = items.map((i) => i.id);

  return (
    <div className="min-h-screen bg-muted/30 pb-36">
      <header className="sticky top-0 z-40 flex h-12 items-center gap-3 border-b bg-background px-3">
        <button onClick={() => window.history.back()} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="font-semibold">Carrinho ({items.length})</h1>
      </header>

      <div className="mx-auto max-w-3xl p-3">
        {items.length === 0 ? (
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
            <Link to="/" className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground">
              Ver produtos
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => {
              const off = Math.round(100 - (item.price / item.originalPrice) * 100);
              return (
                <div key={item.id + (item.size ?? "")} className="flex gap-3 rounded-xl bg-background p-3">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 text-sm font-medium">{item.name}</p>
                      <button onClick={() => remove(item.id)} className="shrink-0 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    {item.size && <p className="text-xs text-muted-foreground">Tamanho: {item.size}</p>}
                    <div className="mt-1 flex gap-1">
                      <span className="rounded bg-discount-bg px-1.5 py-0.5 text-[10px] font-bold text-discount-fg">-{off}%</span>
                      <span className="rounded bg-shipping-bg px-1.5 py-0.5 text-[10px] font-bold text-shipping-fg">Frete grátis</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div>
                        <p className="font-bold text-price">{formatBRL(item.price * item.quantity)}</p>
                        <p className="text-xs text-muted-foreground line-through">{formatBRL(item.originalPrice * item.quantity)}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-md border">
                        <button
                          onClick={() => item.quantity > 1 ? setQty(item.id, item.quantity - 1) : remove(item.id)}
                          className="flex h-8 w-8 items-center justify-center"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => setQty(item.id, item.quantity + 1)} className="flex h-8 w-8 items-center justify-center">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Proteção do cliente */}
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-600">🛡️</span>
            <p className="font-bold text-amber-800">Proteção do cliente</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-amber-900">
            <p>✓ Devolução gratuita</p>
            <p>✓ Reembolso automático por danos</p>
            <p>✓ Pagamento seguro</p>
            <p>✓ Cupom por atraso na coleta</p>
          </div>
        </div>

        {mounted && <RecommendedSection excludeIds={excludeIds} />}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-3xl">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total (itens):</span>
              <span className="text-xl font-bold text-price">{formatBRL(total)}</span>
            </div>
            <button
              onClick={() => navigate({ to: "/checkout" })}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
