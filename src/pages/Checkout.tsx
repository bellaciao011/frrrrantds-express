import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronLeft,
  Loader2,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { getStoredTtclid, trackInitiateCheckout, trackAddPaymentInfo } from "@/lib/tiktokPixel";
import { toast } from "sonner";
import { getUrlWithUtm, getUtmifyTracking } from "@/utils/utm";
import PixDisplay from "@/components/PixDisplay";
import AddressSheet, { loadSavedAddress, type SavedAddress } from "@/components/store/AddressSheet";

// contagem regressiva do cupom
function useCountdown(seconds: number) {
  const [s, setS] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setS((x) => Math.max(0, x - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(s / 3600)).padStart(2, "0");
  const min = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${min}:${ss}`;
}

function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}
function hasValidBrazilianPhone(v: string) {
  const d = onlyDigits(v);
  return d.length === 10 || d.length === 11;
}

export default function CheckoutPage() {
  const { items, total: subtotal, setQty, remove } = useCart();
  const navigate = useNavigate();
  const countdown = useCountdown(5 * 3600);

  const [loading, setLoading] = useState(false);
  const [pixExternalId, setPixExternalId] = useState<string | null>(null);
  const pixAreaRef = useRef<HTMLDivElement>(null);

  // Endereço (via AddressSheet)
  const [addressOpen, setAddressOpen] = useState(false);
  const [addr, setAddr] = useState<SavedAddress | null>(null);

  useEffect(() => {
    const a = loadSavedAddress();
    if (a) setAddr(a);
    else setAddressOpen(true);
  }, []);

  useEffect(() => {
    if (pixExternalId && pixAreaRef.current) {
      setTimeout(() => {
        pixAreaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [pixExternalId]);

  // Desconto: diferença entre "de" (originalPrice) e "por"
  const discountTotal = useMemo(
    () =>
      items.reduce((s, i) => {
        const original = i.originalPrice ?? i.price;
        return s + Math.max(0, (original - i.price) * i.quantity);
      }, 0),
    [items],
  );

  const grandTotal = subtotal;

  // TikTok InitiateCheckout ao entrar no checkout
  useEffect(() => {
    if (items.length === 0) return;
    trackInitiateCheckout({
      value: subtotal,
      contents: items.map((i) => ({
        content_id: i.id,
        content_type: "product",
        content_name: i.name,
        quantity: i.quantity,
        price: i.price,
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finalize = async () => {
    if (loading) return;
    if (!addr) {
      setAddressOpen(true);
      return;
    }
    const amountCents = Math.round(grandTotal * 100);
    if (amountCents < 600) {
      toast.error("Valor mínimo R$ 6,00.");
      return;
    }
    if (!hasValidBrazilianPhone(addr.phone)) {
      toast.error("Informe um telefone válido com DDD.");
      return;
    }
    setLoading(true);
    try {
      const ttclid = getStoredTtclid();
      const tracking = getUtmifyTracking();
      const { data, error } = await supabase.functions.invoke("create-pix", {
        body: {
          amount: amountCents,
          buyer: {
            name: addr.name,
            email: addr.email,
            document: addr.doc,
            phone: addr.phone,
          },
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          })),
          ttclid,
          tracking,
          store_slug: "berzerk",
        },
      });
      if (error) throw error;
      if (!data?.external_id) throw new Error("Falha ao gerar Pix.");
      trackAddPaymentInfo({
        value: grandTotal,
        contents: items.map((i) => ({
          content_id: i.id,
          content_type: "product",
          content_name: i.name,
          quantity: i.quantity,
          price: i.price,
        })),
        order_id: data.external_id,
        identify: { email: addr.email, phone: addr.phone },
      });
      setPixExternalId(data.external_id);
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message ?? "Não foi possível gerar o Pix.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-3 text-muted-foreground">Seu carrinho está vazio.</p>
          <button
            onClick={() => navigate(getUrlWithUtm("/"))}
            className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
          >
            Ver produtos
          </button>
        </div>
      </div>
    );
  }

  const locked = !!pixExternalId;

  return (
    <div className="min-h-screen bg-white pb-36">
      <Helmet><title>Resumo do Pedido — Achadinhos do Momento</title></Helmet>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="relative mx-auto flex h-14 max-w-md items-center justify-center px-3">
          <button
            onClick={() => {
              if (addressOpen) {
                setAddressOpen(false);
                navigate("/carrinho");
                return;
              }
              navigate("/carrinho");
            }}
            className="absolute left-2 flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
            aria-label="Voltar"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="text-center">
            <h1 className="text-base font-bold">Resumo do Pedido</h1>
            <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-emerald-600">
              <Lock className="h-3 w-3" /> Dados criptografados
            </p>
          </div>
        </div>
        <div className="h-1.5 w-full bg-[repeating-linear-gradient(90deg,#ec4899_0_18px,transparent_18px_24px,#06b6d4_24px_42px,transparent_42px_48px)]" />
      </header>

      <main className="mx-auto max-w-md space-y-3 px-3 py-3">
        {/* Resumo cliente + endereço */}
        {addr && (
          <section className="rounded-lg border bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/10">
                <span className="text-rose-500">📍</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">
                  {addr.name}{addr.phone ? `, ${addr.phone}` : ""}
                </p>
                <p className="text-xs leading-snug text-muted-foreground">
                  {addr.address}{addr.number ? `, ${addr.number}` : ""}
                  {addr.district ? `, ${addr.district}` : ""}
                  {addr.city ? `, ${addr.city}` : ""}
                  {addr.state ? ` - ${addr.state}` : ""}
                  {addr.cep ? `, ${addr.cep}` : ""}
                </p>
                {!locked && (
                  <button
                    onClick={() => setAddressOpen(true)}
                    className="mt-1 text-[11px] font-semibold text-rose-500"
                  >
                    Editar
                  </button>
                )}
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-[repeating-linear-gradient(90deg,#f43f5e_0_8px,transparent_8px_16px,#0ea5e9_16px_24px,transparent_24px_32px)]" />
          </section>
        )}

        <p className="text-xs text-muted-foreground">
          Loja ({items.length} {items.length === 1 ? "item" : "itens"})
        </p>

        <div className="flex items-center gap-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2.5 text-sm font-semibold text-sky-700">
          <Truck className="h-4 w-4" /> Frete grátis disponível!
        </div>

        <section className="rounded-lg border bg-white">
          <div className="border-b px-4 py-2.5">
            <h2 className="text-sm font-bold">
              Resumo do carrinho ({items.length} {items.length === 1 ? "item" : "itens"})
            </h2>
          </div>
          <div className="divide-y">
            {items.map((i) => {
              const original = i.originalPrice ?? i.price;
              const off = original > i.price ? Math.round((1 - i.price / original) * 100) : 0;
              return (
                <div key={i.id + (i.size ?? "")} className="flex gap-3 p-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
                    {i.image && (
                      <img src={i.image} alt={i.name} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 text-sm font-semibold">{i.name}</p>
                      {!locked && (
                        <button
                          onClick={() => remove(i.id)}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Remover"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    {i.size && <p className="text-xs text-muted-foreground">{i.size}</p>}
                    <div className="mt-1 flex items-center gap-1.5">
                      {off > 0 && (
                        <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-600">
                          - {off}%
                        </span>
                      )}
                      <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                        Frete grátis
                      </span>
                    </div>
                    <div className="mt-1 flex items-end justify-between">
                      <div>
                        <p className="text-base font-bold">{formatBRL(i.price)}</p>
                        {off > 0 && (
                          <p className="text-xs text-muted-foreground line-through">
                            {formatBRL(original)}
                          </p>
                        )}
                      </div>
                      {!locked ? (
                        <div className="flex items-center gap-2 rounded-full border px-2 py-1">
                          <button
                            onClick={() => setQty(i.id, Math.max(1, i.quantity - 1))}
                            className="text-muted-foreground"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold">{i.quantity}</span>
                          <button
                            onClick={() => setQty(i.id, i.quantity + 1)}
                            className="text-muted-foreground"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">Qtd: {i.quantity}</span>
                      )}
                    </div>
                    <p className="mt-1 text-right text-sm font-semibold">
                      Subtotal: {formatBRL(i.price * i.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {discountTotal > 0 && (
          <section className="rounded-lg border bg-white">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-semibold">Descontos aplicados</span>
              </div>
              <span className="rounded-md bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-600">
                {formatBRL(discountTotal)}
              </span>
            </div>
          </section>
        )}

        {/* Pagamento */}
        <section ref={pixAreaRef} className="rounded-lg border bg-white p-4">
          <h3 className="mb-3 text-sm font-bold">Forma de pagamento</h3>

          {pixExternalId ? (
            <PixDisplay externalId={pixExternalId} />
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md border-2 border-sky-500 bg-sky-50/40 px-3 py-3">
                <div className="flex items-center gap-2.5">
                  <PixIcon />
                  <span className="text-sm font-semibold">PIX à vista</span>
                </div>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                </span>
              </div>

              <button
                onClick={finalize}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FF3366] py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {loading ? "Gerando Pix..." : "Finalizar Compra"}
              </button>

              <p className="flex items-center justify-center gap-1 text-center text-xs text-emerald-700">
                <ShieldCheck className="h-3.5 w-3.5" /> Pagamento 100% seguro
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Barra fixa */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white">
        <div className="mx-auto max-w-md">
          {discountTotal > 0 && (
            <div className="flex items-center justify-center gap-1.5 bg-rose-50 px-3 py-1.5 text-xs text-rose-600">
              🎁 Você está economizando{" "}
              <span className="font-bold">{formatBRL(discountTotal)}</span> neste pedido.
            </div>
          )}
          <div className="flex items-center justify-between px-4 py-2.5">
            <span className="text-sm text-muted-foreground">
              Total ({items.length} {items.length === 1 ? "item" : "itens"})
            </span>
            <span className="text-base font-bold">{formatBRL(grandTotal)}</span>
          </div>
          <div className="bg-gradient-to-r from-rose-500 to-rose-400 px-4 py-2.5 text-center text-sm font-semibold text-white">
            O cupom expira em {countdown}
          </div>
        </div>
      </div>

      <AddressSheet
        open={addressOpen}
        onClose={() => setAddressOpen(false)}
        onBack={() => navigate("/carrinho")}
        onSaved={(a) => {
          setAddr(a);
          setAddressOpen(false);
        }}
      />
    </div>
  );
}

function PixIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <g fill="#32BCAD">
        <path d="M9.5 22.5l-2-2a3 3 0 010-4.2l2-2 6.5 6.5-1.4 1.4a3 3 0 01-4.2 0l-.9.3z" opacity=".85"/>
        <path d="M22.5 9.5l2 2a3 3 0 010 4.2l-2 2L16 11.2l1.4-1.4a3 3 0 014.2 0l.9-.3z" opacity=".85"/>
        <path d="M16 4l4 4-4 4-4-4z"/>
        <path d="M16 20l4 4-4 4-4-4z"/>
      </g>
    </svg>
  );
}
