import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft, Bookmark, ChevronDown, ChevronLeft, ChevronRight, Home, MessageCircle, MoreHorizontal,
  Share2, ShieldCheck, ShoppingCart, Star, Ticket, Truck, Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products, formatBRL } from "@/data/products";
import { useCart } from "@/lib/cart";
import { BuyDrawer } from "@/components/store/BuyDrawer";
import logoBerzerk from "@/assets/logo-meijile.png";
import { getUrlWithUtm } from "@/utils/utm";
import { trackViewContent, trackAddToCart } from "@/lib/tiktokPixel";
import vid1 from "@/assets/videos/creator1.mp4.asset.json";
import vid2 from "@/assets/videos/creator2.mp4.asset.json";
import vid3 from "@/assets/videos/creator3.mp4.asset.json";
import vid4 from "@/assets/videos/creator4.mp4.asset.json";
const creatorVideos: string[] = [vid1.url, vid2.url, vid3.url, vid4.url];
import reviewPhoto1 from "@/assets/reviews/r1.png";
import reviewPhoto2 from "@/assets/reviews/r2.png";
import reviewPhoto3 from "@/assets/reviews/r3.png";
const reviewPhotos: string[][] = [[reviewPhoto1], [reviewPhoto2], [reviewPhoto3]];


const REVIEWS_TOTAL = 521;
const REVIEWS_AVG = 4.8;
const REVIEWS_BREAKDOWN = [
  { stars: 5, count: 470 },
  { stars: 4, count: 33 },
  { stars: 3, count: 10 },
  { stars: 2, count: 3 },
  { stars: 1, count: 5 },
];
const REVIEWS_WITH_MEDIA = 218;



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

export default function ProductPage() {
  const { id = "" } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { add, count: cartCount } = useCart();
  const navigate = useNavigate();
  const countdown = useCountdown(5 * 60 + 43);
  const [bookmarked, setBookmarked] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  
  const [selectedVar, setSelectedVar] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [drawer, setDrawer] = useState<"cart" | "buy" | null>(null);
  const baseImages = product?.images?.length ? product.images : (product ? [product.image] : []);
  const variantImages = (product?.variacoes ?? []).map((v) => v.imagem).filter(Boolean);
  const images: string[] = Array.from(new Set([...baseImages, ...variantImages]));
  const tamanhos = (product?.variacoes ?? []).filter((v) => v.tipo === "tamanho");

  // reset ao trocar de produto
  useEffect(() => { setImgIdx(0); setSelectedVar(0); setSelectedSize(null); }, [id]);

  // TikTok ViewContent
  useEffect(() => {
    if (!product) return;
    trackViewContent({
      content_id: product.id,
      content_name: product.name,
      price: product.price,
    });
  }, [product?.id]);

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

  const handleAdd = () => setDrawer("cart");
  const handleBuy = () => setDrawer("buy");

  const sampleReviews = useMemo(() => {
    const cores = (product?.variacoes ?? []).filter((v) => v.tipo === "cor").map((v) => v.titulo);
    const corDefault = cores[0] ?? "Preta";
    return [
      { initial: "h", name: "h**a", forma: "Normal, calço 37 e ficou certinho, gente ela é linda demais 😍", uso: "Bem confortável e leve", cor: corDefault, item: `${corDefault}, 37`, date: "2026-05-11", photos: 5 },
      { initial: "É", name: "É**a", forma: "Comprei tamanho 35", uso: "Macia desde o primeiro uso", cor: cores[1] ?? corDefault, item: `${cores[1] ?? corDefault}, 35`, date: "2026-05-11", photos: 5 },
      { initial: "J", name: "J**3", forma: "Veio certinho no tamanho", uso: "Muito lindas, compreem, ela é confortável vem bem embalada e parece ser bem resistente!!", cor: corDefault, item: `${corDefault}, 39`, date: "2026-04-28", photos: 3 },
    ];
  }, [product?.id]);


  return (
    <div className="min-h-screen bg-muted/30 pb-24">
      <Helmet><title>{product.name} — Meijile</title><meta name="description" content={`${product.name} por ${formatBRL(product.price)}`} /></Helmet>
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
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
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

        {/* Tamanho */}
        {tamanhos.length > 0 && (
          <div className="mt-2 bg-background px-4 py-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm">
                <span className="text-muted-foreground">Tamanho: </span>
                <span className="font-semibold">{selectedSize ?? "Selecione"}</span>
              </p>
              <span className="text-xs text-muted-foreground">{tamanhos.length} opções</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tamanhos.map((t) => (
                <button
                  key={t.titulo}
                  onClick={() => setSelectedSize(t.titulo)}
                  className={`min-w-[3.5rem] rounded-md border px-4 py-2 text-sm font-medium ${
                    selectedSize === t.titulo
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground"
                  }`}
                >
                  {t.titulo}
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


        {/* Descrição */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="mb-3 text-lg font-bold">Descrição</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/80">
            {product.description || `${product.name} — produto em promoção. Aproveite o preço especial enquanto durar a oferta.`}
          </p>
        </div>

        {/* Avaliações dos clientes */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="text-lg font-bold">Avaliações dos clientes</h2>

          <div className="mt-3 flex items-baseline gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-3xl font-extrabold leading-none">{REVIEWS_AVG.toFixed(1).replace(".", ",")}</span>
            <span className="text-sm text-muted-foreground">· {REVIEWS_TOTAL} avaliações globais</span>
          </div>

          <div className="mt-3 space-y-1.5">
            {REVIEWS_BREAKDOWN.map((b) => {
              const pct = (b.count / REVIEWS_TOTAL) * 100;
              return (
                <div key={b.stars} className="flex items-center gap-2 text-xs">
                  <span className="flex w-6 items-center gap-0.5">{b.stars} <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /></span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-foreground" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-10 text-right tabular-nums text-muted-foreground">{b.count}</span>
                </div>
              );
            })}
          </div>




          {/* Tabs */}
          <div className="mt-4 flex gap-4 border-b text-sm">
            <button className="border-b-2 border-foreground pb-2 font-semibold">Recomendado</button>
            <button className="pb-2 text-muted-foreground">Mais recentes</button>
          </div>

          {/* Filtros */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            <button className="flex shrink-0 items-center gap-1 rounded-full border border-foreground bg-background px-3 py-1 text-xs font-semibold">
              <Star className="h-3 w-3 fill-foreground text-foreground" /> Tudo
            </button>
            <button className="shrink-0 rounded-full border bg-muted/40 px-3 py-1 text-xs">
              Inclui imagens ou vídeos ({REVIEWS_WITH_MEDIA})
            </button>
            <button className="shrink-0 rounded-full border bg-muted/40 px-3 py-1 text-xs">
              Compras verificadas
            </button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">Exibindo {REVIEWS_TOTAL} de {REVIEWS_TOTAL} avaliações</p>

          {/* Reviews */}
          <div className="mt-2 divide-y">
            {sampleReviews.map((r, idx) => (
              <article key={idx} className="py-4">
                <header className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-bold">{r.initial}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{r.name} · <span className="text-xs font-normal text-muted-foreground">Compras verificadas</span></p>
                    <p className="text-[11px] text-muted-foreground">BR</p>
                  </div>
                </header>
                <div className="mt-1 flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  <span className="font-semibold">Forma e tamanho:</span> {r.forma} <span className="font-semibold">Usabilidade:</span> {r.uso} <span className="font-semibold">Cor:</span> {r.cor}
                </p>

                {reviewPhotos[idx] && (
                  <div className="mt-2 flex gap-2">
                    {reviewPhotos[idx].map((src, i) => (
                      <img key={i} src={src} alt={`Foto avaliação ${idx + 1}`} className="h-24 w-24 rounded-lg object-cover border" loading="lazy" />
                    ))}
                  </div>
                )}

                <p className="mt-2 text-xs text-muted-foreground">Item: {r.item}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </article>
            ))}
          </div>

          <button className="mx-auto mt-3 block rounded-full border px-5 py-2 text-sm font-semibold">Ver mais</button>
        </div>


        {/* Loja */}
        <div className="mt-2 flex items-center justify-between bg-background px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-white overflow-hidden">
              <img src={logoBerzerk} alt="Meijile" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <p className="font-bold">Meijile</p>
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
                to={`/produto/${p.id }`}
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

        {/* Vídeos de criadores */}
        <div className="mt-2 bg-background px-4 py-4">
          <h2 className="mb-3 text-lg font-bold">Vídeos de criadores</h2>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {creatorVideos.map((v, i) => (
              <video
                key={i}
                src={v}
                className="h-72 w-44 shrink-0 rounded-xl bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                muted
              />
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
                  <Link to={`/produto/${p.id }`}>
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
                      onClick={() => {
                        add(p);
                        trackAddToCart({ content_id: p.id, content_name: p.name, price: p.price, quantity: 1 });
                      }}
                      className="flex h-9 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                      aria-label="Adicionar"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => navigate(getUrlWithUtm(`/produto/${p.id }`))}
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

        {/* Breadcrumb */}
        <nav className="mt-2 bg-background px-4 py-3 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
            <li>Meijile Shop</li><li>›</li>
            <li>Casa e Cozinha</li><li>›</li>
            <li>Eletrodomésticos</li><li>›</li>
            <li>Robôs Aspiradores</li>
          </ol>
        </nav>

        {/* Footer accordion */}
        <div className="mt-2 bg-background">
          {[
            { title: "Comprar", items: ["Como comprar", "Formas de pagamento", "Rastrear pedido", "Trocas e devoluções"] },
            { title: "Vender", items: ["Seja parceiro", "Programa de afiliados"] },
            { title: "Sobre", items: ["Sobre a Meijile", "Imprensa", "Carreiras"] },
            { title: "Suporte ao cliente", items: ["Central de ajuda", "Fale conosco", "WhatsApp"] },
            { title: "Jurídico", items: ["Termos de uso", "Política de Privacidade", "Política de Cookies"] },
          ].map((sec) => (
            <details key={sec.title} className="group border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 font-semibold">
                {sec.title}
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="px-4 pb-4 text-sm text-muted-foreground space-y-2">
                {sec.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </details>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-2 flex items-center gap-4 bg-background px-4 py-4 text-xs">
          <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" /> Frete grátis</span>
          <span className="flex items-center gap-1.5"><Ticket className="h-4 w-4" /> Ofertas para novos clientes</span>
        </div>

      </div>

      {/* Footer fixo de ação */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-3 py-2">
          <Link to="/" className="flex w-12 flex-col items-center gap-0.5 py-1 text-foreground">
            <Home className="h-6 w-6" strokeWidth={1.75} />
            <span className="text-[11px] font-medium">Loja</span>
          </Link>
          <button className="flex w-12 flex-col items-center gap-0.5 py-1 text-foreground">
            <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
            <span className="text-[11px] font-medium">Chat</span>
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 rounded-full bg-muted px-3 py-3 text-center text-sm font-bold leading-tight text-foreground"
          >
            Adicionar ao<br />Carrinho
          </button>
          <button
            onClick={handleBuy}
            className="flex-1 rounded-full bg-primary px-3 py-3 text-sm font-bold text-primary-foreground"
          >
            Comprar Agora
          </button>
        </div>
      </div>

      {/* Drawer de variações */}
      <BuyDrawer
        product={product}
        open={drawer !== null}
        mode={drawer ?? "cart"}
        initialSize={selectedSize}
        onClose={() => setDrawer(null)}
        onConfirm={drawer === "buy" ? () => navigate(getUrlWithUtm("/checkout")) : () => navigate(getUrlWithUtm("/carrinho"))}
      />
    </div>
  );
}

