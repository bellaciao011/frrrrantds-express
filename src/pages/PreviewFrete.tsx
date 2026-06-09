import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, AlertTriangle, Truck, X } from "lucide-react";
import PixDisplay from "@/components/PixDisplay";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";

const FRETE_CENTS = 3984;

export default function PreviewFretePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>Frete Sedex — Entrega</title>
      </Helmet>

      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Pedido #ABC</h1>
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
              {formatBRL(12990 / 100)} recebido com sucesso.
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
                  Pague o frete via Sedex para finalizar o pedido e agendar a entrega.
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
            <div className="mt-3 rounded-xl border bg-white p-4 text-center">
              <p className="text-xs text-muted-foreground">(Preview — Pix simulado)</p>
              <p className="mt-1 text-2xl font-bold">{formatBRL(FRETE_CENTS / 100)}</p>
              <div className="mx-auto mt-4 flex aspect-square w-56 items-center justify-center rounded-lg border bg-muted">
                <span className="text-xs text-muted-foreground">QR Code</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Código Pix simulado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
