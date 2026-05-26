import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LayoutGrid, List as ListIcon, X } from "lucide-react";
import { Header } from "@/components/store/Header";
import { StoreInfo } from "@/components/store/StoreInfo";
import { FreeShippingBar } from "@/components/store/FreeShippingBar";
import { ProductCard } from "@/components/store/ProductCard";
import { PromoPopup } from "@/components/store/PromoPopup";
import { products } from "@/data/products";
import { CATEGORIES, filterByCategory, productMatchesCategory, type CategoryId } from "@/lib/categories";

type Tab = "inicio" | "produtos" | "categorias";
type Sort = "recomendado" | "vendidos" | "lancamentos" | "preco-asc" | "preco-desc";

export default function IndexPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? undefined;
  const categoryParam = params.get("cat") as CategoryId | null;
  const [tab, setTab] = useState<Tab>(categoryParam ? "produtos" : "produtos");
  const [sort, setSort] = useState<Sort>("preco-asc");
  const [layout, setLayout] = useState<"list" | "grid">("list");
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(categoryParam);

  // Sync state with URL params (when navigating from category buttons)
  useEffect(() => {
    setActiveCategory(categoryParam);
    if (categoryParam) setTab("produtos");
  }, [categoryParam]);

  const activeCategoryLabel = useMemo(
    () => CATEGORIES.find((c) => c.id === activeCategory)?.label ?? null,
    [activeCategory]
  );

  const clearCategory = () => {
    setActiveCategory(null);
    const next = new URLSearchParams(params);
    next.delete("cat");
    setParams(next, { replace: true });
  };

  const selectCategory = (id: CategoryId) => {
    setActiveCategory(id);
    setTab("produtos");
    const next = new URLSearchParams(params);
    next.set("cat", id);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = products;
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    list = filterByCategory(list, activeCategory);
    const sorted = [...list];
    if (sort === "preco-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "preco-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "lancamentos") sorted.reverse();
    else if (sort === "recomendado") sorted.sort((a, b) => a.price - b.price);
    return sorted;
  }, [q, sort, activeCategory]);

  const cheapest = useMemo(() => [...products].sort((a, b) => a.price - b.price), []);
  // Principais produtos: priorizar sandálias (mais sandálias na home)
  const top = useMemo(() => {
    const sandalias = cheapest.filter((p) => productMatchesCategory(p, "sandalias"));
    const outros = cheapest.filter((p) => !productMatchesCategory(p, "sandalias"));
    return [...sandalias.slice(0, 6), ...outros.slice(0, 2)].slice(0, 6);
  }, [cheapest]);
  const recommended = cheapest.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Melissa — Promoções</title>
        <meta name="description" content="Loja online com até 90% OFF e frete grátis." />
      </Helmet>
      <PromoPopup />
      <Header />
      <StoreInfo />
      <FreeShippingBar />

      <nav className="sticky top-14 z-30 mx-auto mt-4 max-w-5xl border-b bg-background">
        <div className="grid grid-cols-2">
          {[
            { id: "inicio" as Tab, label: "Página inicial" },
            { id: "produtos" as Tab, label: "Produtos" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative py-3 text-sm font-medium ${
                tab === t.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-16 -translate-x-1/2 bg-foreground" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {tab === "inicio" && (
        <div className="mx-auto max-w-5xl px-3 py-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold">Principais produtos</h2>
            <button onClick={() => setTab("produtos")} className="text-sm text-primary">
              Ver mais
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {top.map((p) => (
              <ProductCard key={p.id} product={p} layout="grid" />
            ))}
          </div>

          <div className="mb-3 mt-6 flex items-center justify-between">
            <h2 className="text-base font-bold">Recomendado para você</h2>
            <button onClick={() => setTab("produtos")} className="text-sm text-primary">
              Mais
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {recommended.map((p) => (
              <ProductCard key={p.id} product={p} layout="grid" />
            ))}
          </div>
        </div>
      )}

      {tab === "produtos" && (
        <>
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 overflow-x-auto border-b bg-background px-3 py-2">
            <div className="flex gap-1 text-sm">
              {[
                { id: "recomendado" as Sort, label: "Recomendado" },
                { id: "vendidos" as Sort, label: "Mais vendidos" },
                { id: "lancamentos" as Sort, label: "Lançamentos" },
                { id: "preco-asc" as Sort, label: "Preço ↑" },
                { id: "preco-desc" as Sort, label: "Preço ↓" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSort(s.id)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 ${
                    sort === s.id ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLayout(layout === "list" ? "grid" : "list")}
              className="shrink-0 rounded-full p-2 hover:bg-muted"
              aria-label="Alternar layout"
            >
              {layout === "list" ? (
                <LayoutGrid className="h-5 w-5" />
              ) : (
                <ListIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="mx-auto max-w-5xl px-3 py-3">
            {(q || activeCategoryLabel) && (
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {activeCategoryLabel && (
                  <button
                    onClick={clearCategory}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20"
                  >
                    {activeCategoryLabel}
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
                <p className="text-sm text-muted-foreground">
                  {q && <>Resultados para "<strong>{q}</strong>" — </>}
                  {filtered.length} produto(s)
                </p>
              </div>
            )}
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
                {activeCategory && (
                  <button
                    onClick={clearCategory}
                    className="mt-3 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
                  >
                    Ver todos os produtos
                  </button>
                )}
              </div>
            ) : layout === "grid" ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} layout="grid" />
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl bg-background">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} layout="list" />
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {tab === "categorias" && (
        <div className="mx-auto max-w-5xl px-3 py-4">
          <h2 className="mb-3 text-base font-bold">Escolha uma categoria</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl border bg-background font-semibold transition-colors hover:bg-accent"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-sm">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
