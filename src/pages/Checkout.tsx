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
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { getStoredTtclid, trackInitiateCheckout, trackAddPaymentInfo } from "@/lib/tiktokPixel";
import { toast } from "sonner";
import { getUrlWithUtm } from "@/utils/utm";

type Step = 1 | 2 | 3;
type Shipping = { id: string; name: string; price: number; eta: string };

const SHIPPINGS: Shipping[] = [
  { id: "jadlog", name: "JadLog", price: 9.9, eta: "Receba em até 2 dias úteis" },
  { id: "sedex", name: "Sedex-Express", price: 6.9, eta: "Receba em até 4 dias úteis" },
  { id: "correio", name: "Correio", price: 0, eta: "Receba em até 7 dias úteis" },
];

const FREE_SHIPPING_MIN_QTY = 2;

// ========== formatadores ==========
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function maskCpf(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function maskCep(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  return d.replace(/(\d{5})(\d)/, "$1-$2");
}
function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}
function hasValidBrazilianPhone(v: string) {
  const d = onlyDigits(v);
  return d.length === 10 || d.length === 11;
}

// ========== contagem regressiva do cupom ==========
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

export default function CheckoutPage() {
  const { items, total: subtotal, count, setQty, remove } = useCart();
  const navigate = useNavigate();
  const countdown = useCountdown(5 * 3600);

  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);

  // Identificação
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [doc, setDoc] = useState("");

  // Entrega
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");
  const [shippingId, setShippingId] = useState<string>("jadlog");

  const shipping = useMemo(
    () => SHIPPINGS.find((s) => s.id === shippingId) ?? SHIPPINGS[0],
    [shippingId],
  );

  const cepDigits = cep.replace(/\D/g, "");
  const cepFilled = cepDigits.length === 8;

  // se frete grátis selecionado mas qtd abaixo do mínimo, volta para jadlog
  useEffect(() => {
    if (shippingId === "correio" && count < FREE_SHIPPING_MIN_QTY) {
      setShippingId("jadlog");
    }
  }, [count, shippingId]);

  // Desconto: diferença entre preço "de" (originalPrice) e preço "por"
  const discountTotal = useMemo(
    () =>
      items.reduce((s, i) => {
        const original = i.originalPrice ?? i.price;
        return s + Math.max(0, (original - i.price) * i.quantity);
      }, 0),
    [items],
  );

  const shippingApplied = cepFilled ? shipping.price : 0;
  const grandTotal = subtotal + shippingApplied;

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


  // ========== handlers ==========
  const goNext = (target: Step) => {
    if (target === 2) {
      if (!email || !phone || !name || !doc) {
        toast.error("Preencha todos os campos.");
        return;
      }
      if (!hasValidBrazilianPhone(phone)) {
        toast.error("Informe um telefone válido com DDD.");
        return;
      }
    }
    if (target === 3) {
      if (!cep || !address || !number || !district || !city || !state) {
        toast.error("Preencha o endereço completo.");
        return;
      }
    }
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finalize = async () => {
    if (loading) return;
    const amountCents = Math.round(grandTotal * 100);
    if (amountCents < 600) {
      toast.error("Valor mínimo R$ 6,00.");
      return;
    }
    if (!hasValidBrazilianPhone(phone)) {
      toast.error("Informe um telefone válido com DDD.");
      return;
    }
    setLoading(true);
    try {
      const ttclid = getStoredTtclid();
      const { data, error } = await supabase.functions.invoke("create-pix", {
        body: {
          amount: amountCents,
          buyer: { name, email, document: doc, phone },
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          })),
          ttclid,
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
        identify: { email, phone },
      });
      navigate(getUrlWithUtm(`/pix/${data.external_id }`));
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message ?? "Não foi possível gerar o Pix.");
    } finally {
      setLoading(false);
    }
  };

  // ========== empty state ==========
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

  return (
    <div className="min-h-screen bg-white pb-36">
      <Helmet><title>Resumo do Pedido — Berzerk</title></Helmet>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="relative mx-auto flex h-14 max-w-md items-center justify-center px-3">
          <button
            onClick={() => (step > 1 ? setStep((step - 1) as Step) : window.history.back())}
            className="absolute left-2 flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
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
        {/* faixa decorativa rosa/azul */}
        <div className="h-1.5 w-full bg-[repeating-linear-gradient(90deg,#ec4899_0_18px,transparent_18px_24px,#06b6d4_24px_42px,transparent_42px_48px)]" />
      </header>

      <main className="mx-auto max-w-md space-y-3 px-3 py-3">
        {/* RESUMO DO CARRINHO */}
        <p className="text-xs text-muted-foreground">
          Loja ({items.length} {items.length === 1 ? "item" : "itens"})
        </p>

        {/* Frete grátis banner */}
        {count >= FREE_SHIPPING_MIN_QTY && (
          <div className="flex items-center gap-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2.5 text-sm font-semibold text-sky-700">
            <Truck className="h-4 w-4" /> Você ganhou frete grátis!
          </div>
        )}

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
                      <button
                        onClick={() => remove(i.id)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Remover"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    {i.size && (
                      <p className="text-xs text-muted-foreground">{i.size}</p>
                    )}
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

        {/* DESCONTOS APLICADOS */}
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

        {/* RESUMO FINANCEIRO */}
        <section className="rounded-lg border bg-white px-4 py-3 text-sm">
          <h3 className="mb-2 font-bold">Resumo financeiro</h3>
          <div className="flex justify-between py-1">
            <span>Subtotal</span>
            <span>{formatBRL(subtotal + discountTotal)}</span>
          </div>
          {discountTotal > 0 && (
            <div className="flex justify-between py-1 font-semibold text-rose-500">
              <span>Descontos</span>
              <span>{formatBRL(discountTotal)}</span>
            </div>
          )}
          <div className="flex justify-between py-1">
            <span>Frete</span>
            <span>
              {cepFilled
                ? `${shipping.name} (${shipping.price === 0 ? "Grátis" : formatBRL(shipping.price)})`
                : "Calculado após o CEP"}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t pt-2">
            <span className="text-base font-bold">Total</span>
            <span className="text-lg font-bold">{formatBRL(grandTotal)}</span>
          </div>
          <p className="text-right text-xs text-muted-foreground">Impostos inclusos</p>
        </section>

        {/* STEPS */}
        <section className="rounded-lg border bg-white p-4">
          <Stepper step={step} />

          {step === 1 && (
            <Step1
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={(v) => setPhone(maskPhone(v))}
              name={name}
              setName={setName}
              doc={doc}
              setDoc={(v) => setDoc(maskCpf(v))}
              onNext={() => goNext(2)}
            />
          )}

          {step === 2 && (
            <Step2
              cep={cep}
              setCep={(v) => setCep(maskCep(v))}
              address={address}
              setAddress={setAddress}
              number={number}
              setNumber={setNumber}
              district={district}
              setDistrict={setDistrict}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              complement={complement}
              setComplement={setComplement}
              shippingId={shippingId}
              setShippingId={setShippingId}
              count={count}
              onNext={() => goNext(3)}
            />
          )}

          {step === 3 && (
            <Step3
              loading={loading}
              onPay={finalize}
            />
          )}
        </section>
      </main>

      {/* BARRA FIXA INFERIOR */}
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
    </div>
  );
}

// ========== Stepper ==========
function Stepper({ step }: { step: Step }) {
  const items: { n: Step; label: string }[] = [
    { n: 1, label: "Identificação" },
    { n: 2, label: "Entrega" },
    { n: 3, label: "Pagamento" },
  ];
  return (
    <div className="mb-5 flex items-center justify-between">
      {items.map((it, idx) => {
        const done = step > it.n;
        const active = step === it.n;
        return (
          <div key={it.n} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  done
                    ? "bg-emerald-500 text-white"
                    : active
                      ? "bg-slate-900 text-white"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {it.n}
              </div>
              <span
                className={`mt-1 text-xs ${
                  active ? "font-bold text-foreground" : "text-muted-foreground"
                }`}
              >
                {it.label}
              </span>
            </div>
            {idx < items.length - 1 && (
              <div className="mx-2 h-px flex-1 -translate-y-3 border-t border-dashed" />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ========== Step 1: Identificação ==========
function Step1(p: {
  email: string; setEmail: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  name: string; setName: (v: string) => void;
  doc: string; setDoc: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-3">
      <Field label="E-mail">
        <input
          type="email"
          value={p.email}
          onChange={(e) => p.setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Telefone">
        <input
          inputMode="tel"
          placeholder="(99) 99999-9999"
          value={p.phone}
          onChange={(e) => p.setPhone(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Nome completo">
        <input
          value={p.name}
          onChange={(e) => p.setName(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="CPF/CNPJ">
        <input
          inputMode="numeric"
          placeholder="000.000.000-00"
          value={p.doc}
          onChange={(e) => p.setDoc(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>

      <div className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">
        <p className="mb-1 font-semibold">Por que precisamos desses dados?</p>
        <ul className="ml-4 list-disc space-y-0.5">
          <li>Enviar o comprovante de compra;</li>
          <li>Garantir a devolução caso necessário;</li>
          <li>Acompanhar o andamento do pedido.</li>
        </ul>
      </div>

      <button
        onClick={p.onNext}
        className="w-full rounded-md bg-[#FF3366] py-3 text-sm font-bold text-white shadow-md"
      >
        Ir para entrega
      </button>
    </div>
  );
}

// ========== Step 2: Entrega ==========
function Step2(p: {
  cep: string; setCep: (v: string) => void;
  address: string; setAddress: (v: string) => void;
  number: string; setNumber: (v: string) => void;
  district: string; setDistrict: (v: string) => void;
  city: string; setCity: (v: string) => void;
  state: string; setState: (v: string) => void;
  complement: string; setComplement: (v: string) => void;
  shippingId: string; setShippingId: (v: string) => void;
  count: number;
  onNext: () => void;
}) {
  const freeShippingUnlocked = p.count >= 3;
  // ViaCEP autopreencher
  useEffect(() => {
    const raw = p.cep.replace(/\D/g, "");
    if (raw.length !== 8) return;
    let alive = true;
    fetch(`https://viacep.com.br/ws/${raw}/json/`)
      .then((r) => r.json())
      .then((d) => {
        if (!alive || d?.erro) return;
        if (!p.address && d.logradouro) p.setAddress(d.logradouro);
        if (!p.district && d.bairro) p.setDistrict(d.bairro);
        if (!p.city && d.localidade) p.setCity(d.localidade);
        if (!p.state && d.uf) p.setState(d.uf);
      })
      .catch(() => {});
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.cep]);

  return (
    <div className="space-y-3">
      <Field label="CEP">
        <input
          inputMode="numeric"
          placeholder="00000-000"
          value={p.cep}
          onChange={(e) => p.setCep(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Endereço">
        <input
          placeholder="Rua / Avenida"
          value={p.address}
          onChange={(e) => p.setAddress(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Número">
        <input
          value={p.number}
          onChange={(e) => p.setNumber(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Bairro">
        <input
          value={p.district}
          onChange={(e) => p.setDistrict(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Cidade">
        <input
          value={p.city}
          onChange={(e) => p.setCity(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Estado">
        <input
          value={p.state}
          onChange={(e) => p.setState(e.target.value.toUpperCase().slice(0, 2))}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>
      <Field label="Complemento">
        <input
          placeholder="Apartamento, bloco, referência (opcional)"
          value={p.complement}
          onChange={(e) => p.setComplement(e.target.value)}
          className="w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rose-200"
        />
      </Field>

      {!freeShippingUnlocked && (
        <div className="flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          <Truck className="h-4 w-4 shrink-0" />
          Frete grátis disponível na compra de 2 camisas ou mais. Faltam{" "}
          <strong>{Math.max(0, 2 - p.count)}</strong>.
        </div>
      )}

      <div className="space-y-2 pt-1">
        {SHIPPINGS.map((s) => {
          const isFree = s.id === "correio";
          const locked = isFree && !freeShippingUnlocked;
          const sel = p.shippingId === s.id && !locked;
          return (
            <button
              type="button"
              key={s.id}
              disabled={locked}
              onClick={() => !locked && p.setShippingId(s.id)}
              className={`flex w-full items-center gap-3 rounded-md border px-3 py-3 text-left transition-colors ${
                locked
                  ? "cursor-not-allowed border-border bg-muted/40 opacity-60"
                  : sel
                    ? "border-sky-500 ring-2 ring-sky-100"
                    : "border-border hover:bg-muted/20"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  locked
                    ? "border-muted-foreground/30"
                    : sel
                      ? "border-sky-500"
                      : "border-muted-foreground/40"
                }`}
              >
                {sel && !locked && <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs text-muted-foreground">
                  {locked ? "Disponível na compra de 2 camisas ou mais" : s.eta}
                </p>
              </div>
              <span className={`text-sm font-semibold ${isFree && !locked ? "text-emerald-600" : ""}`}>
                {s.price === 0 ? "Frete grátis" : formatBRL(s.price)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground">
        Frete selecionado:{" "}
        {SHIPPINGS.find((s) => s.id === p.shippingId)?.name} (
        {SHIPPINGS.find((s) => s.id === p.shippingId)?.price === 0
          ? "Grátis"
          : formatBRL(SHIPPINGS.find((s) => s.id === p.shippingId)!.price)}
        )
      </p>

      <button
        onClick={p.onNext}
        className="w-full rounded-md bg-[#FF3366] py-3 text-sm font-bold text-white shadow-md"
      >
        Ir para pagamento
      </button>
    </div>
  );
}

// ========== Step 3: Pagamento ==========
function Step3({ loading, onPay }: { loading: boolean; onPay: () => void }) {
  return (
    <div className="space-y-3">
      <div className="rounded-md border bg-white p-3">
        <p className="mb-2 text-sm font-semibold">Forma de pagamento</p>
        <div className="flex items-center justify-between rounded-md border-2 border-sky-500 bg-sky-50/40 px-3 py-3">
          <div className="flex items-center gap-2.5">
            <PixIcon />
            <span className="text-sm font-semibold">PIX à vista</span>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-500">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
          </span>
        </div>
      </div>

      <button
        onClick={onPay}
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
  );
}

// ========== Helpers ==========
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold">{label}</label>
      {children}
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

