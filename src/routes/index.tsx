import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import { Header } from "@/components/store/Header";
import { StoreInfo } from "@/components/store/StoreInfo";
import { FreeShippingBar } from "@/components/store/FreeShippingBar";
import { ProductCard } from "@/components/store/ProductCard";
import { PromoPopup } from "@/components/store/PromoPopup";
import { products } from "@/data/products";

interface SearchParams {
  q?: string;
}

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : undefined,
  }),
});

type Tab = "inicio" | "produtos" | "categorias";
type Sort = "recomendado" | "vendidos" | "lancamentos" | "preco-asc" | "preco-desc";

function Index() {
  const { q } = Route.useSearch();
  const [tab, setTab] = useState<Tab>("produtos");
  const [sort, setSort] = useState<Sort>("preco-asc");
  const [layout, setLayout] = useState<"list" | "grid">("list");

  const filtered = useMemo(() => {
    let list = products;
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    const sorted = [...list];
    if (sort === "preco-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "preco-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "lancamentos") sorted.reverse();
    else if (sort === "recomendado") sorted.sort((a, b) => a.price - b.price);
    return sorted;
  }, [q, sort]);

  const cheapest = useMemo(() => [...products].sort((a, b) => a.price - b.price), []);
  const top = cheapest.slice(0, 3);
  const recommended = cheapest.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <PromoPopup />
      <Header />
      <StoreInfo />
      <FreeShippingBar />

      {/* Tabs */}
      <nav className="sticky top-14 z-30 mx-auto mt-4 max-w-5xl border-b bg-background">
        <div className="grid grid-cols-3">
          {[
            { id: "inicio" as Tab, label: "Página inicial" },
            { id: "produtos" as Tab, label: "Produtos" },
            { id: "categorias" as Tab, label: "Categorias" },
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
            <button onClick={() => setTab("produtos")} className="text-sm text-primary">Ver mais</button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {top.map((p) => (
              <ProductCard key={p.id} product={p} layout="grid" />
            ))}
          </div>

          <div className="mb-3 mt-6 flex items-center justify-between">
            <h2 className="text-base font-bold">Recomendado para você</h2>
            <button onClick={() => setTab("produtos")} className="text-sm text-primary">Mais</button>
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
              {layout === "list" ? <LayoutGrid className="h-5 w-5" /> : <ListIcon className="h-5 w-5" />}
            </button>
          </div>

          <div className="mx-auto max-w-5xl px-3 py-3">
            {q && (
              <p className="mb-3 text-sm text-muted-foreground">
                Resultados para "<strong>{q}</strong>" — {filtered.length} produto(s)
              </p>
            )}
            {layout === "grid" ? (
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["Sandálias", "Rasteiras", "Bolsas", "Botas", "Mini Melissa", "Coleção Hello Kitty"].map((cat) => (
              <button
                key={cat}
                onClick={() => setTab("produtos")}
                className="flex h-24 items-center justify-center rounded-xl bg-background font-semibold hover:bg-accent"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
