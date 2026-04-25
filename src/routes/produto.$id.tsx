import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Heart, Play, Share2, ShoppingCart, Star, Truck, ShieldCheck, Package } from "lucide-react";
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
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
});

const SIZES = ["33", "34", "35", "36", "37", "38", "39", "40"];

const REVIEWS = [
  { name: "Ana C.", rating: 5, date: "12/03/2026", text: "Chegou super rápido e o produto é exatamente como nas fotos. Adorei!", size: "36" },
  { name: "Juliana M.", rating: 5, date: "08/03/2026", text: "Confortável e lindo. Já é o segundo que compro aqui.", size: "37" },
  { name: "Bia S.", rating: 4, date: "02/03/2026", text: "Ótimo custo-benefício, recomendo demais.", size: "35" },
  { name: "Carla R.", rating: 5, date: "28/02/2026", text: "Atendimento perfeito e entrega no prazo.", size: "38" },
];

function ProductPage() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  const off = Math.round(100 - (product.price / product.originalPrice) * 100);
  const related = products.filter((p) => p.id !== product.id).slice(0, 8);

  const handleAdd = () => add(product, size ?? undefined);
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

        {/* Barra de gradiente com desconto */}
        <div className="bg-gradient-to-r from-pink-500 via-primary to-rose-600 px-4 py-3 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-extrabold leading-none">{off}% OFF</p>
              <p className="mt-1 text-xs opacity-90">Oferta por tempo limitado</p>
            </div>
            <div className="text-right">
              <p className="text-xs line-through opacity-80">{formatBRL(product.originalPrice)}</p>
              <p className="text-2xl font-extrabold leading-none">{formatBRL(product.price)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 bg-background p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-shipping-bg px-2 py-0.5 text-xs font-bold text-shipping-fg">Frete grátis</span>
            <span className="rounded bg-discount-bg px-2 py-0.5 text-xs font-bold text-discount-fg">Pague em até 10x</span>
          </div>
          <h1 className="text-lg font-semibold leading-snug">{product.name}</h1>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>(100 avaliações)</span>
            <span>•</span>
            <span>100 vendido(s)</span>
          </div>
        </div>

        {/* Tamanhos */}
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

        {/* Vantagens */}
        <div className="mt-2 grid grid-cols-3 gap-1 bg-background p-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <Truck className="h-5 w-5 text-primary" />
            <p className="text-[11px] font-medium leading-tight">Frete grátis Brasil</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p className="text-[11px] font-medium leading-tight">Compra 100% segura</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Package className="h-5 w-5 text-primary" />
            <p className="text-[11px] font-medium leading-tight">Troca grátis em 30 dias</p>
          </div>
        </div>

        {/* Vídeo dos criadores */}
        <div className="mt-2 bg-background p-4">
          <h2 className="mb-3 text-base font-semibold">Veja nos criadores</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setShowVideo(true)}
                className="relative h-56 w-32 shrink-0 overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={product.image}
                  alt={`Vídeo ${n}`}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95">
                    <Play className="h-4 w-4 fill-foreground text-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-left text-white">
                  <p className="text-xs font-semibold">@criadora_{n}</p>
                  <p className="text-[10px] opacity-80">{(n * 12).toLocaleString("pt-BR")}k views</p>
                </div>
              </button>
            ))}
          </div>
          {showVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideo(false)}>
              <div className="aspect-[9/16] w-full max-w-sm rounded-2xl bg-muted-foreground/30 p-4 text-center text-white">
                <p className="mt-20 text-sm opacity-80">[ Espaço para vídeo do criador ]</p>
                <p className="mt-2 text-xs opacity-60">Cole aqui um embed do Reels / TikTok / YouTube Shorts</p>
              </div>
            </div>
          )}
        </div>

        {/* Entrega */}
        <div className="mt-2 flex items-center justify-between bg-background p-4">
          <div>
            <p className="text-sm font-semibold">Entrega</p>
            <p className="text-xs text-muted-foreground">Frete grátis em até 7 dias úteis</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>

        {/* Descrição */}
        <div className="mt-2 bg-background p-4">
          <h2 className="mb-3 text-base font-semibold">Descrição do produto</h2>
          <div className="space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>
              <strong>{product.name}</strong> chega para te acompanhar em todas as ocasiões com
              muito conforto, estilo e durabilidade.
            </p>
            <p>
              Produto da campanha promocional com até <strong>{off}% de desconto</strong>. Frete
              grátis para todo o Brasil em pedidos selecionados.
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Material de alta qualidade</li>
              <li>Solado antiderrapante</li>
              <li>Numeração brasileira (33–40)</li>
              <li>Garantia de 90 dias</li>
            </ul>
          </div>
        </div>

        {/* Avaliações */}
        <div className="mt-2 bg-background p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold">Avaliações (100)</h2>
            <button className="text-sm text-primary">Ver todas</button>
          </div>
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-muted/50 p-3">
            <div className="text-center">
              <p className="text-3xl font-bold">5.0</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2 text-xs">
                  <span className="w-3">{star}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "1%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="border-b pb-3 last:border-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Tamanho: {r.size}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relacionados */}
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
          <button onClick={handleAdd} className="flex-1 rounded-full border-2 border-primary py-3 text-sm font-bold text-primary">
            Adicionar ao carrinho
          </button>
          <button onClick={handleBuy} className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground">
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
