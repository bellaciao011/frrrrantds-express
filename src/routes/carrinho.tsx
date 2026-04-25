import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";

export const Route = createFileRoute("/carrinho")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Carrinho — Melissa" }] }),
});

function CartPage() {
  const { items, remove, setQty, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30 pb-32">
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
            {items.map((item) => (
              <div key={item.id + (item.size ?? "")} className="flex gap-3 rounded-xl bg-background p-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                <div className="flex flex-1 flex-col">
                  <p className="line-clamp-2 text-sm font-medium">{item.name}</p>
                  {item.size && <p className="text-xs text-muted-foreground">Tamanho: {item.size}</p>}
                  <div className="mt-auto flex items-center justify-between">
                    <p className="font-bold text-price">{formatBRL(item.price * item.quantity)}</p>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(item.id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-full border">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => setQty(item.id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-full border">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => remove(item.id)} className="ml-2 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-3">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Total</p>
              <p className="text-xl font-bold text-price">{formatBRL(total)}</p>
            </div>
            <button
              onClick={() => navigate({ to: "/checkout" })}
              className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
