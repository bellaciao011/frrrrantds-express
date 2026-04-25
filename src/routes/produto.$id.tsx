import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Heart, Share2, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { products, formatBRL } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produto/$id")({
  component: ProductPage,
  head: ({ params }) => {
    const p = products.find((x) => x.id === params.id);
    return {
      meta: [
        { title: p ? `${p.name} — Outlet Oficial` : "Produto" },
        { name: "description", content: p ? `${p.name} por ${formatBRL(p.price)}` : "Produto" },
      ],
    };
  },
});

const SIZES = ["33", "34", "35", "36", "37", "38", "39", "40"];

function ProductPage() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  const off = Math.round(100 - (product.price / product.originalPrice) * 100);
  const related = products.filter((p) => p.id !== product.id).slice(0, 8);

  const handleAdd = () => {
    add(product, size ?? undefined);
  };
  const handleBuy = () => {
    add(product, size ?? undefined);
    navigate({ to: "/checkout" });
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-32">
      <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b bg-background px-3">
        <button onClick={() => window.history.back()} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"><Share2 className="h-5 w-5" /></button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"><Heart className="h-5 w-5" /></button>
          <Link to="/carrinho" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"><ShoppingCart className="h-5 w-5" /></Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl">
        <div className="aspect-square bg-background">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
        </div>

        <div className="space-y-3 bg-background p-4">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-price">{formatBRL(product.price)}</span>
            <span className="text-base text-muted-foreground line-through">{formatBRL(product.originalPrice)}</span>
            <span className="rounded bg-discount-bg px-2 py-0.5 text-xs font-bold text-discount-fg">{off}% OFF</span>
          </div>
          <p className="text-sm font-semibold text-shipping-fg">Frete grátis</p>
          <h1 className="text-lg font-semibold leading-snug">{product.name}</h1>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">5.0</span>
            <span>(100 avaliações)</span>
            <span>•</span>
            <span>100 vendido(s)</span>
          </div>
        </div>

        <div className="mt-2 bg-background p-4">
          <p className="mb-2 text-sm font-semibold">
            Tamanho: {size && <span className="font-normal text-muted-foreground">{size}</span>}
          </p>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`min-w-[3rem] rounded-md border px-3 py-2 text-sm font-medium ${
                  size === s ? "border-primary bg-primary/10 text-primary" : "hover:border-primary/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between bg-background p-4">
          <div>
            <p className="text-sm font-semibold">Entrega</p>
            <p className="text-xs text-muted-foreground">Frete grátis em até 7 dias úteis</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>

        <div className="mt-2 bg-background p-4">
          <h2 className="mb-2 text-base font-semibold">Descrição</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.name} — produto da campanha promocional. Material de alta qualidade,
            confortável e durável. Aproveite o preço especial por tempo limitado.
          </p>
        </div>

        <div className="mt-2 bg-background p-4">
          <h2 className="mb-3 text-base font-semibold">Você também pode gostar</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((p) => (
              <Link key={p.id} to="/produto/$id" params={{ id: p.id }} className="block">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-1 line-clamp-1 text-xs">{p.name}</p>
                <p className="text-sm font-bold text-price">{formatBRL(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-3 shadow-lg">
        <div className="mx-auto flex max-w-3xl gap-2">
          <button
            onClick={handleAdd}
            className="flex-1 rounded-full border-2 border-primary py-3 text-sm font-bold text-primary"
          >
            Adicionar ao carrinho
          </button>
          <button
            onClick={handleBuy}
            className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
          >
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
