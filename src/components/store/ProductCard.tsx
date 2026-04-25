import { Link } from "@tanstack/react-router";
import { ShoppingCart, Star } from "lucide-react";
import { type Product, formatBRL } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, layout = "list" }: { product: Product; layout?: "list" | "grid" }) {
  const { add } = useCart();
  const off = Math.round(100 - (product.price / product.originalPrice) * 100);

  if (layout === "grid") {
    return (
      <div className="overflow-hidden rounded-xl border bg-card">
        <Link to="/produto/$id" params={{ id: product.id }} className="block">
          <div className="aspect-square overflow-hidden bg-muted">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Link>
        <div className="p-2">
          <Link to="/produto/$id" params={{ id: product.id }}>
            <h3 className="line-clamp-2 min-h-[2.5rem] text-xs font-semibold">{product.name}</h3>
          </Link>
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="rounded bg-discount-bg px-1.5 py-0.5 text-[10px] font-bold text-discount-fg">
              {off}% OFF
            </span>
            <span className="rounded bg-shipping-bg px-1.5 py-0.5 text-[10px] font-bold text-shipping-fg">
              Frete grátis
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>5 | 100 vendido(s)</span>
          </div>
          <div className="mt-1">
            <p className="text-base font-bold text-price">{formatBRL(product.price)}</p>
            <p className="text-xs text-muted-foreground line-through">{formatBRL(product.originalPrice)}</p>
          </div>
          <button
            onClick={() => add(product)}
            className="mt-2 flex w-full items-center justify-center gap-1 rounded-full bg-primary py-1.5 text-xs font-semibold text-primary-foreground"
          >
            <ShoppingCart className="h-3 w-3" /> Comprar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 border-b bg-card p-3">
      <Link to="/produto/$id" params={{ id: product.id }} className="shrink-0">
        <div className="h-28 w-28 overflow-hidden rounded-lg bg-muted">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col">
        <Link to="/produto/$id" params={{ id: product.id }}>
          <h3 className="line-clamp-2 text-sm font-semibold">{product.name}</h3>
        </Link>
        <div className="mt-1 flex flex-wrap gap-1">
          <span className="rounded bg-discount-bg px-1.5 py-0.5 text-[10px] font-bold text-discount-fg">
            {off}% OFF
          </span>
          <span className="rounded bg-shipping-bg px-1.5 py-0.5 text-[10px] font-bold text-shipping-fg">
            Frete grátis
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span>5 | 100 vendido(s)</span>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-lg font-bold text-price">{formatBRL(product.price)}</p>
            <p className="text-xs text-muted-foreground line-through">{formatBRL(product.originalPrice)}</p>
          </div>
          <button
            onClick={() => add(product)}
            className="flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            <ShoppingCart className="h-4 w-4" /> Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
