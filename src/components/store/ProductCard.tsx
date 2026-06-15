import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { type Product, formatBRL } from "@/data/products";
import { BuyDrawer } from "@/components/store/BuyDrawer";
import { optimizedImg, optimizedSrcSet } from "@/lib/img";
import { getUrlWithUtm } from "@/utils/utm";

export function ProductCard({
  product,
  layout = "list",
}: {
  product: Product;
  layout?: "list" | "grid";
}) {
  const off = Math.round(100 - (product.price / product.originalPrice) * 100);
  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();
  const goCart = () => navigate(getUrlWithUtm("/carrinho"));
  const cores = (product.variacoes ?? []).filter((v) => v.tipo === "cor");

  if (layout === "grid") {
    return (
      <>
        <div className="relative overflow-hidden rounded-xl border bg-card">
          <Link
            to={`/produto/${product.id}`}
            className="absolute inset-0 z-0"
            aria-label={product.name}
          />
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={optimizedImg(product.image, { width: 240, quality: 65 })}
              srcSet={optimizedSrcSet(product.image, 240, 65)}
              sizes="(min-width: 640px) 200px, 45vw"
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={240}
              height={240}
            />
          </div>
          <div className="p-2">
            <h3 className="line-clamp-2 min-h-[2.5rem] text-xs font-semibold">{product.name}</h3>
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
              <p className="text-xs text-muted-foreground line-through">
                {formatBRL(product.originalPrice)}
              </p>
            </div>
            <button
              onClick={() => setDrawer(true)}
              className="relative z-10 mt-2 flex w-full items-center justify-center gap-1 rounded-full bg-primary py-1.5 text-xs font-semibold text-primary-foreground"
            >
              <ShoppingCart className="h-3 w-3" /> Comprar
            </button>
          </div>
        </div>

        <BuyDrawer product={product} open={drawer} mode="cart" onClose={() => setDrawer(false)} onConfirm={goCart} />
      </>
    );
  }

  return (
    <>
      <div className="relative flex gap-3 border-b bg-card p-3">
        <Link
          to={`/produto/${product.id}`}
          className="absolute inset-0 z-0"
          aria-label={product.name}
        />
        <div className="shrink-0">
          <div className="h-28 w-28 overflow-hidden rounded-lg bg-muted">
            <img
              src={optimizedImg(product.image, { width: 224, quality: 65 })}
              srcSet={optimizedSrcSet(product.image, 224, 65)}
              sizes="112px"
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={224}
              height={224}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="line-clamp-2 text-sm font-semibold">{product.name}</h3>
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
              <p className="text-xs text-muted-foreground line-through">
                {formatBRL(product.originalPrice)}
              </p>
            </div>
            <button
              onClick={() => setDrawer(true)}
              className="relative z-10 flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              <ShoppingCart className="h-4 w-4" /> Comprar
            </button>
          </div>
        </div>
      </div>

      <BuyDrawer product={product} open={drawer} mode="cart" onClose={() => setDrawer(false)} onConfirm={goCart} />
    </>
  );
}
