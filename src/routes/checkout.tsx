import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, CreditCard, MapPin, QrCode } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/data/products";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({ meta: [{ title: "Checkout — Outlet Oficial" }] }),
});

function CheckoutPage() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "done">("form");
  const [payment, setPayment] = useState<"pix" | "card">("pix");

  const shipping = total >= 120 ? 0 : 19.9;
  const grandTotal = total + shipping;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
    setTimeout(() => clear(), 100);
  };

  if (step === "done") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 text-center">
        <CheckCircle2 className="h-16 w-16 text-shipping-fg" />
        <h1 className="mt-4 text-2xl font-bold">Pedido confirmado!</h1>
        <p className="mt-2 text-muted-foreground">
          Você receberá um e-mail com os detalhes do pagamento.
        </p>
        <button
          onClick={() => navigate({ to: "/" })}
          className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
        >
          Voltar à loja
        </button>
      </div>
    );
  }

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
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><MapPin className="h-4 w-4" /> Entrega</h2>
          <div className="space-y-2">
            <input required placeholder="Nome completo" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required type="email" placeholder="E-mail" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required placeholder="CPF" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input required placeholder="Telefone" className="w-full rounded-lg border px-3 py-2 text-sm" />
            <div className="grid grid-cols-3 gap-2">
              <input required placeholder="CEP" className="rounded-lg border px-3 py-2 text-sm" />
              <input required placeholder="Cidade" className="col-span-2 rounded-lg border px-3 py-2 text-sm" />
            </div>
            <input required placeholder="Endereço, número e complemento" className="w-full rounded-lg border px-3 py-2 text-sm" />
          </div>
        </section>

        <section className="rounded-xl bg-background p-4">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><CreditCard className="h-4 w-4" /> Pagamento</h2>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setPayment("pix")} className={`flex items-center justify-center gap-2 rounded-lg border-2 py-3 text-sm font-semibold ${payment === "pix" ? "border-primary bg-primary/10" : ""}`}>
              <QrCode className="h-4 w-4" /> Pix
            </button>
            <button type="button" onClick={() => setPayment("card")} className={`flex items-center justify-center gap-2 rounded-lg border-2 py-3 text-sm font-semibold ${payment === "card" ? "border-primary bg-primary/10" : ""}`}>
              <CreditCard className="h-4 w-4" /> Cartão
            </button>
          </div>
          {payment === "card" && (
            <div className="mt-3 space-y-2">
              <input required placeholder="Número do cartão" className="w-full rounded-lg border px-3 py-2 text-sm" />
              <input required placeholder="Nome impresso" className="w-full rounded-lg border px-3 py-2 text-sm" />
              <div className="grid grid-cols-2 gap-2">
                <input required placeholder="MM/AA" className="rounded-lg border px-3 py-2 text-sm" />
                <input required placeholder="CVV" className="rounded-lg border px-3 py-2 text-sm" />
              </div>
            </div>
          )}
          {payment === "pix" && (
            <p className="mt-3 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              Após confirmar, você receberá o QR Code para pagamento via Pix.
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

        <button type="submit" className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground">
          Pagar {formatBRL(grandTotal)}
        </button>
      </form>
    </div>
  );
}
