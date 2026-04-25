import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft, Bookmark, ChevronLeft, ChevronRight, Home, MessageCircle, MoreHorizontal,
  Play, Share2, ShieldCheck, ShoppingCart, Star, Ticket, Video, Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
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

const REVIEWS_TOTAL = 207;
const REVIEWS_5 = 12300;
const REVIEWS_4 = 857;
const REVIEWS_WITH_MEDIA = 2500;

const CREATORS = [
  { name: "Lucas Rangel", video: "https://appv1.rabbtifyecom.pro/uploads/video1.mp4", avatar: "https://loja.frrrrantds.shop/uploads/LucasRangel.jpg" },
  { name: "Nandy Zorzan", video: "https://appv1.rabbtifyecom.pro/uploads/video2.mp4", avatar: "https://loja.frrrrantds.shop/uploads/Nandy%20zorzan.jpg" },
  { name: "Califórnices", video: "https://appv1.rabbtifyecom.pro/uploads/video3.mp4", avatar: "https://loja.frrrrantds.shop/uploads/Calif%C3%B3rnices.jpg" },
  { name: "Ana Cecília", video: "https://appv1.rabbtifyecom.pro/uploads/video4.mp4", avatar: "https://loja.frrrrantds.shop/uploads/anacecilia.jpg" },
  { name: "Lucas Rangel", video: "https://appv1.rabbtifyecom.pro/uploads/video5.mp4", avatar: "https://loja.frrrrantds.shop/uploads/LucasRangel.jpg" },
];

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

function ProductPage() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();
  const navigate = useNavigate();
  const countdown = useCountdown(5 * 60 + 43);
  const [bookmarked, setBookmarked] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [selectedVar, setSelectedVar] = useState(0);
  const baseImages = product?.images?.length ? product.images : (product ? [product.image] : []);
  const variantImages = (product?.variacoes ?? []).map((v) => v.imagem).filter(Boolean);
  const images: string[] = Array.from(new Set([...baseImages, ...variantImages]));

  // reset ao trocar de produto
  useEffect(() => { setImgIdx(0); setSelectedVar(0); }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Produto não encontrado.</p>
      </div>
    );
  }

  const off = Math.round(100 - (product.price / product.originalPrice) * 100);
  const related = products.filter((p) => p.id !== product.id).slice(0, 6);
  const moreFromStore = products.filter((p) => p.id !== product.id).slice(6, 12);

  const handleAdd = () => add(product);
  const handleBuy = () => {
    add(product);
    navigate({ to: "/checkout" });
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b bg-background px-3">
        <button onClick={() => window.history.back()} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <Share2 className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <Link to="/carrinho" className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <ShoppingCart className="h-5 w-5" strokeWidth={2.5} />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </Link>
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <MoreHorizontal className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-3xl">
        {/* Galeria — swipe horizontal */}
        <div className="relative aspect-square select-none overflow-hidden bg-background">
          <div
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${imgIdx * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative h-full w-full shrink-0">
                <img
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  className="pointer-events-none h-full w-full object-contain"
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.2"; }}
                />
              </div>
            ))}
          </div>

          {/* Áreas invisíveis para swipe por toque/drag */}
          <div
            className="absolute inset-0"
            onTouchStart={(e) => {
              const x = e.touches[0].clientX;
              (e.currentTarget as HTMLElement).dataset.startX = String(x);
            }}
            onTouchEnd={(e) => {
              const startX = Number((e.currentTarget as HTMLElement).dataset.startX || 0);
              const endX = e.changedTouches[0].clientX;
              const diff = startX - endX;
              if (Math.abs(diff) > 40) {
                if (diff > 0) setImgIdx((i) => Math.min(images.length - 1, i + 1));
                else setImgIdx((i) => Math.max(0, i - 1));
              }
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => Math.max(0, i - 1))}
                disabled={imgIdx === 0}
                className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow disabled:opacity-30"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setImgIdx((i) => Math.min(images.length - 1, i + 1))}
                disabled={imgIdx === images.length - 1}
                className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow disabled:opacity-30"
                aria-label="Próxima"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background">
            {imgIdx + 1}/{images.length}
          </span>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === imgIdx ? "w-4 bg-primary" : "w-1.5 bg-foreground/30"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Barra de gradiente promocional */}
        <div className="bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 px-4 py-3 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-white px-2 py-1 text-xs font-extrabold text-rose-600">
                -{off}.00%
              </span>
              <span className="text-2xl font-extrabold leading-none">{formatBRL(product.price)}</span>
              <Ticket className="h-5 w-5 opacity-90" />
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end gap-1 text-sm font-bold">
                <Zap className="h-4 w-4 fill-white" /> Oferta Relâmpago
              </p>
              <p className="text-xs opacity-95">Termina em {countdown}</p>
            </div>
          </div>
          <p className="mt-1 text-xs text-white/80 line-through">{formatBRL(product.originalPrice)}</p>
        </div>

        {/* Cupons horizontal */}
        <div className="flex gap-2 overflow-x-auto bg-background px-3 py-3">
          <Ticket className="h-4 w-4 shrink-0 text-primary" />
          <button className="shrink-0 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Desconto de 15%, máximo de R$35
          </button>
          <button className="shrink-0 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Cupom válido hoje
          </button>
          <button className="shrink-0 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Frete grátis
          </button>
        </div>

        {/* Nome do produto */}
        <div className="flex items-start justify-between gap-3 bg-background px-4 pb-4">
          <h1 className="text-xl font-bold leading-snug">{product.name}</h1>
          <button
            onClick={() => setBookmarked((b) => !b)}
            className="shrink-0 p-1"
            aria-label="Salvar"
          >
            <Bookmark
              className={`h-6 w-6 ${bookmarked ? "fill-primary text-primary" : "text-foreground"}`}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Devoluções */}
        <div className="mt-2 flex items-center gap-3 bg-background px-4 py-3 text-sm">
          <ShieldCheck className="h-5 w-5 text-foreground" />
          <p className="font-medium">Devoluções gratuitas em 30 dias · Cancelamento fácil</p>
        </div>

        {/* Variações (cores) */}
        {product.variacoes && product.variacoes.length > 0 && (
          <div className="border-t bg-background px-4 py-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm">
                <span className="text-muted-foreground">Cor: </span>
                <span className="font-semibold">{product.variacoes[selectedVar]?.titulo}</span>
              </p>
              <span className="text-xs text-muted-foreground">
                {product.variacoes.length} opções
              </span>
            </div>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
              {product.variacoes.map((v, n) => (
                <button
                  key={n}
                  onClick={() => {
                    setSelectedVar(n);
                    const idx = images.findIndex((x) => x === v.imagem);
                    if (idx >= 0) setImgIdx(idx);
                  }}
                  className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 ${
                    selectedVar === n ? "border-primary" : "border-transparent"
                  }`}
                  title={v.titulo}
                >
                  <img src={v.imagem} alt={v.titulo} className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Proteção do cliente */}
        <div className="mt-2 bg-amber-50 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-700" />
              <p className="font-bold text-amber-800">Proteção do cliente</p>
            </div>
            <ChevronRight className="h-5 w-5 text-amber-700" />
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-amber-900">
            <li>✓ Devolução gratuita</li>
            <li>✓ Cupom por atraso na coleta</li>
            <li>✓ Reembolso automático por danos</li>
            <li>✓ Pagamento seguro</li>
          </ul>
        </div>

        {/* Vídeos dos criadores */}
        <div className="mt-2 bg-background px-4 py-4">
          <div className="mb-3 flex items-baseline justify-between">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              <h2 className="text-lg font-bold">Vídeos dos criadores</h2>
            </div>
            <p className="text-sm text-muted-foreground">Conteúdo enviado por quem testou</p>
          </div>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {CREATORS.map((c, n) => (
              <button
                key={n}
                onClick={() => setActiveVideo(n)}
                className="relative h-64 w-44 shrink-0 overflow-hidden rounded-2xl bg-muted"
              >
                <video
                  src={c.video}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <Play className="ml-0.5 h-5 w-5 fill-foreground text-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 text-white">
                  <img src={c.avatar} alt={c.name} className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-white" />
                  <p className="truncate text-sm font-semibold drop-shadow">{c.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal de vídeo */}
        {activeVideo !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white text-2xl"
            >
              ×
            </button>
            <video
              src={CREATORS[activeVideo].video}
              className="max-h-full max-w-full rounded-lg"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Descrição */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="mb-3 text-lg font-bold">Descrição</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/80">
            {product.description || `${product.name} — produto em promoção. Aproveite o preço especial enquanto durar a oferta.`}
          </p>
        </div>

        {/* Avaliações dos clientes */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="text-lg font-bold">Avaliações dos clientes ({REVIEWS_TOTAL})</h2>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-bold">4.7</span>
            <span className="text-sm text-muted-foreground">/5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Nenhuma avaliação ainda.</p>

          <div className="mt-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold">Avaliações da loja (13,9 mil)</h3>
                <p className="text-xs text-muted-foreground">Resumo e classificação dos clientes</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              <button className="shrink-0 rounded-full border bg-muted/40 px-3 py-1.5 text-xs">
                Inclui imagens ou vídeos <span className="text-muted-foreground">({(REVIEWS_WITH_MEDIA / 1000).toLocaleString("pt-BR")} mil)</span>
              </button>
              <button className="flex shrink-0 items-center gap-1 rounded-full border bg-muted/40 px-3 py-1.5 text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> 5
                <span className="text-muted-foreground">({(REVIEWS_5 / 1000).toLocaleString("pt-BR")} mil)</span>
              </button>
              <button className="flex shrink-0 items-center gap-1 rounded-full border bg-muted/40 px-3 py-1.5 text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> 4
                <span className="text-muted-foreground">({REVIEWS_4})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Loja */}
        <div className="mt-2 flex items-center justify-between bg-background px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-muted text-[10px] font-bold tracking-tight">
              LOJA
            </div>
            <div>
              <p className="font-bold">Outlet Oficial</p>
              <p className="text-sm text-muted-foreground">16300 vendido(s)</p>
            </div>
          </div>
          <button className="rounded-full bg-muted px-5 py-2 text-sm font-semibold">Seguir</button>
        </div>

        {/* Mais desta loja */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="mb-3 text-lg font-bold">Mais desta loja</h2>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {moreFromStore.map((p) => (
              <Link
                key={p.id}
                to="/produto/$id"
                params={{ id: p.id }}
                className="block w-36 shrink-0"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-1 text-sm font-bold text-foreground">{formatBRL(p.price)}</p>
                <span className="mt-0.5 inline-block rounded bg-discount-bg px-1.5 py-0.5 text-[10px] font-bold text-discount-fg">
                  -{Math.round(100 - (p.price / p.originalPrice) * 100)}%
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Você também pode gostar */}
        <div className="mt-2 bg-muted/30 px-3 py-4">
          <h2 className="mb-3 px-1 text-lg font-bold">Você também pode gostar</h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map((p) => {
              const pct = Math.round(100 - (p.price / p.originalPrice) * 100);
              return (
                <div key={p.id} className="rounded-2xl border bg-background p-2 shadow-sm">
                  <Link to="/produto/$id" params={{ id: p.id }}>
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <p className="mt-2 line-clamp-1 px-1 text-sm font-bold">{p.name}</p>
                  </Link>
                  <div className="mt-1 space-y-1 px-1">
                    <span className="inline-flex items-center gap-1 rounded bg-discount-bg px-2 py-0.5 text-[11px] font-bold text-discount-fg">
                      <Ticket className="h-3 w-3" /> {pct}% OFF
                    </span>
                    <div>
                      <span className="inline-block rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                        Frete grátis
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>5.0 | 100 vendido(s)</span>
                    </div>
                    <p className="text-base font-bold text-price">{formatBRL(p.price)}</p>
                    <p className="text-xs text-muted-foreground line-through">{formatBRL(p.originalPrice)}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-1 px-1 pb-1">
                    <button
                      onClick={() => add(p)}
                      className="flex h-9 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-label="Adicionar"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => navigate({ to: "/produto/$id", params: { id: p.id } })}
                      className="flex-1 rounded-full bg-primary py-2 text-xs font-bold text-primary-foreground"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Política de privacidade */}
        <div className="mt-2 bg-background px-4 py-6 text-center">
          <h3 className="font-bold">Políticas e Privacidade</h3>
          <a href="#" className="mt-1 block text-sm font-semibold text-blue-600 underline">
            Política de Privacidade
          </a>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Seus dados são tratados conforme a legislação vigente e usados apenas para
            processar pedidos e atendimento.
          </p>
        </div>
      </div>

      {/* Footer fixo de ação */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-2 py-2">
          <Link to="/" className="flex w-12 flex-col items-center gap-0.5 py-1 text-foreground">
            <Home className="h-5 w-5" />
            <span className="text-[10px] font-medium">Loja</span>
          </Link>
          <button className="flex w-12 flex-col items-center gap-0.5 py-1 text-foreground">
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] font-medium">Chat</span>
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 rounded-full bg-muted py-3 text-sm font-bold text-foreground"
          >
            Adicionar ao Carrinho
          </button>
          <button
            onClick={handleBuy}
            className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
          >
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
