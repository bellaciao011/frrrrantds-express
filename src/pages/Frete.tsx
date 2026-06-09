import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, AlertTriangle, Loader2, Truck, X } from "lucide-react";
import { useParentOrder } from "@/lib/useParentOrder";
import { useChildPix } from "@/lib/useChildPix";
import PixDisplay from "@/components/PixDisplay";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";

const FRETE_CENTS = 3984; // R$ 39,84

export default function FretePage() {
  const { externalId = "" } = useParams<{ externalId: string }>();
  const navigate = useNavigate();
  const { order: parent, loading } = useParentOrder(externalId);

  const { childId, loading: creating, error } = useChildPix({
    parent: parent
      ? {
          external_id: parent.external_id,
          buyer_name: parent.buyer_name,
          buyer_email: parent.buyer_email,
          buyer_document: parent.buyer_document,
          buyer_phone: parent.buyer_phone,
          ttclid: parent.ttclid,
        }
      : null,
    amountCents: FRETE_CENTS,
    storeSlug: "sedex-upsell",
    itemId: "frete-sedex",
    itemName: `Frete Sedex referente ao pedido #${externalId}`,
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!parent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground">Pedido não encontrado.</p>
        <button
          onClick={() => navigate(getUrlWithUtm("/"))}
          className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
        >
          Voltar à loja
        </button>
      </div>
    );
  }

  const shortId = parent.external_id.slice(-3).toUpperCase();

  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>Frete Sedex — Entrega</title>
      </Helmet>

      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Pedido #{shortId}</h1>
            <button
              onClick={() => navigate(getUrlWithUtm("/"))}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-5 py-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <p className="mt-2 text-base font-bold text-emerald-600">Pagamento confirmado!</p>
            <p className="text-xs text-muted-foreground">
              {formatBRL(parent.amount / 100)} recebido com sucesso.
            </p>
          </div>

          <div className="px-5">
            <div className="overflow-hidden rounded-xl border">
              <div className="flex items-center gap-2 bg-[#1f3a8a] px-4 py-2.5 text-white">
                <Truck className="h-4 w-4" />
                <p className="text-sm font-semibold">Frete Sedex — Entrega para todo o Brasil</p>
              </div>
              <div className="space-y-3 px-4 py-3">
                <p className="text-sm text-foreground">
                  O frete foi mal calculado para seu endereço.
                </p>
                <div className="flex items-start gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>
                    Sem a confirmação do frete, o produto <strong>não poderá ser despachado</strong>.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t pt-2 text-sm">
                  <span className="text-muted-foreground">Valor do frete</span>
                  <span className="font-bold">{formatBRL(FRETE_CENTS / 100)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4">
            <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              QR Code Pix — Frete
            </p>
            <div className="mt-3">
              {creating || !childId ? (
                <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <p className="text-xs">Gerando Pix do frete...</p>
                </div>
              ) : (
                <PixDisplay externalId={childId} />
              )}
              {error && (
                <p className="mt-2 text-center text-xs text-red-600">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
