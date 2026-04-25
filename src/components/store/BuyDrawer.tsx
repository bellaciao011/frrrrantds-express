import { useEffect, useMemo, useState } from "react";
import { Maximize2, Minus, Plus, X } from "lucide-react";
import { type Product, formatBRL } from "@/data/products";
import { useCart } from "@/lib/cart";
import { useCartFly } from "@/lib/cart-fly";

interface Props {
  product: Product;
  open: boolean;
  mode: "cart" | "buy";
  onClose: () => void;
  onConfirm?: () => void; // chamado após adicionar (usado pelo "comprar agora" para navegar)
}

export function BuyDrawer({ product, open, mode, onClose, onConfirm }: Props) {
  const { add } = useCart();
  const fly = useCartFly();
  const cores = useMemo(
    () => (product.variacoes ?? []).filter((v) => v.tipo === "cor"),
    [product],
  );
  const tamanhos = useMemo(
    () => (product.variacoes ?? []).filter((v) => v.tipo === "tamanho"),
    [product],
  );

  const [corIdx, setCorIdx] = useState(0);
  const [tamIdx, setTamIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setCorIdx(0);
      setTamIdx(0);
      setQty(1);
      setPreview(null);
    }
  }, [open, product.id]);

  if (!open) return null;

  const off = Math.round(100 - (product.price / product.originalPrice) * 100);
  const corSelecionada = cores[corIdx];
  const thumb = corSelecionada?.imagem || product.image;

  const handleConfirm = () => {
    const size = tamanhos[tamIdx]?.titulo;
    for (let i = 0; i < qty; i++) add(product, size);
    onClose();
    if (mode === "buy") {
      fly.trigger();
    } else {
      onConfirm?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-background pb-32 animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com thumb + preço */}
        <div className="flex gap-3 border-b p-4">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border bg-muted">
            <img src={thumb} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <span className="rounded bg-primary px-1.5 py-0.5 text-xs font-bold text-primary-foreground">
                {off}.00%
              </span>
              <span className="text-2xl font-extrabold text-primary">{formatBRL(product.price)}</span>
            </div>
            <h2 className="mt-1 text-base font-bold leading-tight">{product.name}</h2>
            <p className="text-sm text-muted-foreground line-through">{formatBRL(product.originalPrice)}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Variações */}
        {(cores.length > 0 || tamanhos.length > 0) && (
          <div className="border-b p-4">
            <h3 className="mb-3 text-lg font-bold">Variações</h3>

            {cores.length > 0 && (
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold">Cor</p>
                <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
                  {cores.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setCorIdx(i)}
                      className={`relative w-32 shrink-0 overflow-hidden rounded-xl border bg-background ${
                        corIdx === i ? "border-primary ring-2 ring-primary/30" : "border-border"
                      }`}
                    >
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreview(c.imagem);
                        }}
                        className="absolute left-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-foreground/40 text-white"
                      >
                        <Maximize2 className="h-3 w-3" />
                      </span>
                      <div className="aspect-square bg-muted">
                        <img src={c.imagem} alt={c.titulo} className="h-full w-full object-contain" loading="lazy" />
                      </div>
                      <p className="border-t py-2 text-center text-sm font-medium">{c.titulo}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {tamanhos.length > 0 && (
              <div>
                <p className="mb-2 text-sm font-semibold">Tamanho</p>
                <div className="flex flex-wrap gap-2">
                  {tamanhos.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setTamIdx(i)}
                      className={`min-w-[3.5rem] rounded-md border px-4 py-2 text-sm font-medium ${
                        tamIdx === i
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
          </div>
        )}

        {/* Quantidade */}
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-bold uppercase tracking-wide">Quantidade</p>
          <div className="flex items-center rounded-md border">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-10 w-10 items-center justify-center text-foreground disabled:opacity-30"
              disabled={qty <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center text-base font-bold">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="flex h-10 w-10 items-center justify-center text-foreground"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Preview ampliado */}
        {preview && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setPreview(null)}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={preview} alt="Preview" className="max-h-full max-w-full object-contain" />
          </div>
        )}

        {/* Botão fixo de confirmação */}
        <div className="fixed bottom-0 left-1/2 z-10 w-full max-w-3xl -translate-x-1/2 border-t bg-background px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <button
            onClick={handleConfirm}
            className="w-full rounded-full bg-primary py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg"
          >
            {mode === "buy" ? "Comprar Agora" : "Adicionar ao Carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
}
