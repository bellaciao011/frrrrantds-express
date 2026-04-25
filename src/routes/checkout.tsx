import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CreditCard, Loader2, MapPin, QrCode } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({ meta: [{ title: "Checkout — Outlet Oficial" }] }),
});

function CheckoutPage() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState<"pix" | "card">("pix");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [doc, setDoc] = useState("");
  const [phone, setPhone] = useState("");

  const shipping = total >= 120 ? 0 : 19.9;
  const grandTotal = total + shipping;
  const amountCents = Math.round(grandTotal * 100);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (payment !== "pix") {
      toast.info("Por enquanto só estamos aceitando Pix.");
      return;
    }

    if (amountCents < 600) {
      toast.error("Valor mínimo do pedido é R$ 6,00.");
      return;
    }

    setLoading(true);
    try {
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
        },
      });

      if (error) throw error;
      if (!data?.external_id) throw new Error("Pedido não retornou external_id");

      clear();
      navigate({ to: "/pix/$externalId", params: { externalId: data.external_id } });
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message ?? "Não foi possível gerar o Pix. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Carrinho vazio.</p>
          <button onClick={() => navigate({ to: "/" })} className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground">
            Ver produtos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 pb-32">
      <header className="sticky top-0 z-40 flex h-12 items-center gap-3 border-b bg-background px-3">
        <button onClick={() => window.history.back()} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="font-semibold">Finalizar compra</h1>
      </header>

      <form onSubmit={submit} className="mx-auto max-w-3xl space-y-3 p-3">
        <section className="rounded-xl bg-background p-4">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><MapPin className="h-4 w-4" /> Seus dados</h2>
          <div className="space-y-2">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required value={doc} onChange={(e) => setDoc(e.target.value)} placeholder="CPF" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone com DDD" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
        </section>

        <section className="rounded-xl bg-background p-4">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><CreditCard className="h-4 w-4" /> Pagamento</h2>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setPayment("pix")} className={`flex items-center justify-center gap-2 rounded-lg border-2 py-3 text-sm font-semibold ${payment === "pix" ? "border-primary bg-primary/10" : ""}`}>
              <QrCode className="h-4 w-4" /> Pix
            </button>
            <button type="button" onClick={() => setPayment("card")} disabled className={`flex items-center justify-center gap-2 rounded-lg border-2 py-3 text-sm font-semibold opacity-50`}>
              <CreditCard className="h-4 w-4" /> Cartão (em breve)
            </button>
          </div>
          {payment === "pix" && (
            <p className="mt-3 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              Após confirmar, você verá o QR Code e o código copia-e-cola para pagar via Pix. A confirmação é automática.
            </p>
          )}
        </section>

        <section className="rounded-xl bg-background p-4">
          <h2 className="mb-3 font-semibold">Resumo do pedido</h2>
          <div className="space-y-2">
            {items.map((i) => (
              <div key={i.id + (i.size ?? "")} className="flex justify-between text-sm">
                <span className="line-clamp-1 flex-1 pr-2">{i.name} ×{i.quantity}</span>
                <span className="font-medium">{formatBRL(i.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1 border-t pt-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatBRL(total)}</span></div>
            <div className="flex justify-between"><span>Frete</span><span>{shipping === 0 ? "Grátis" : formatBRL(shipping)}</span></div>
            <div className="mt-2 flex justify-between border-t pt-2 text-base font-bold">
              <span>Total</span><span className="text-price">{formatBRL(grandTotal)}</span>
            </div>
          </div>
        </section>

        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-bold text-primary-foreground disabled:opacity-60">
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Gerando Pix...</> : <>Pagar {formatBRL(grandTotal)} com Pix</>}
        </button>
      </form>
    </div>
  );
}
