import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Loader2, X } from "lucide-react";
import { useParentOrder } from "@/lib/useParentOrder";
import { useChildPix } from "@/lib/useChildPix";
import PixDisplay from "@/components/PixDisplay";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";

export default function PendenciaTributariaPage() {
  const { externalId = "" } = useParams<{ externalId: string }>();
  const navigate = useNavigate();
  const { order: parent, loading } = useParentOrder(externalId);

  const [secondsLeft, setSecondsLeft] = useState(30 * 60);
  const [showPix, setShowPix] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const icmsCentavos = useMemo(() => Math.round((parent?.amount ?? 0) * 0.35), [parent]);

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
    amountCents: icmsCentavos,
    storeSlug: "icms",
    itemId: "icms-taxa",
    itemName: `ICMS referente ao pedido #${externalId}`,
    autoStart: showPix,
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
      </div>
    );
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const shortId = parent.external_id.slice(-3).toUpperCase();

  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>Pendência Tributária — ICMS</title>
      </Helmet>
      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Lote #{shortId}</h1>
            <button onClick={() => navigate(getUrlWithUtm("/"))} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Alerta vermelho com timer */}
          <div className="px-5 pt-4">
            <div className="flex items-stretch overflow-hidden rounded-md bg-[#c0392b] text-white">
              <div className="flex-1 px-3 py-2.5">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase">
                  <AlertTriangle className="h-3.5 w-3.5" /> Pendência tributária ativa
                </p>
                <p className="text-sm font-semibold">Produto retido no armazém fiscal</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#0c2d6b] px-4 py-2">
                <p className="text-[9px] font-bold uppercase opacity-80">Expira em</p>
                <p className="text-lg font-extrabold leading-none">{mm}:{ss}</p>
              </div>
            </div>
          </div>

          {/* Cartão Ministério da Fazenda */}
          <div className="mx-5 my-4 overflow-hidden rounded-md border">
            <div className="bg-[#0c2d6b] px-4 py-3 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-wide opacity-80">Ministério da Fazenda</p>
              <p className="text-sm font-extrabold leading-tight">NOTIFICAÇÃO DE PENDÊNCIA TRIBUTÁRIA</p>
              <p className="text-[11px] opacity-90">ICMS — Imposto sobre Circulação de Mercadorias e Serviços</p>
            </div>

            <div className="flex items-center justify-between border-b bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0c2d6b] text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z"/></svg>
                </div>
                <p className="text-sm font-bold text-[#0c2d6b]">Receita Federal</p>
              </div>
              <div className="text-right leading-tight">
                <p className="text-[8px] font-semibold uppercase text-muted-foreground">Governo Federal</p>
                <p className="text-sm font-extrabold tracking-tight text-[#0c2d6b]">BRASIL</p>
              </div>
            </div>

            <div className="space-y-3 px-4 py-3 text-xs leading-relaxed text-foreground/90">
              <p>
                Nos termos do <strong>art. 155, II da Constituição Federal</strong> c/c o Regulamento do ICMS
                (RICMS), a circulação de bem resultante de <strong>arrematação em leilão público</strong>{" "}
                configura fato gerador do ICMS. A Receita Federal identificou a movimentação do bem
                arrematado e emitiu automaticamente a guia de recolhimento estadual.
              </p>

              <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700">
                O produto ficará <strong>retido no armazém fiscal</strong> até a quitação. O não pagamento
                implica <strong>cancelamento automático da arrematação</strong> e perda integral dos
                valores já pagos.
              </div>

              <div className="rounded-md bg-[#f1f5e8] px-3 py-2.5 text-[12px]">
                <div className="flex justify-between"><span>Base de cálculo (arrematação):</span><span className="font-semibold">{formatBRL(parent.amount / 100)}</span></div>
                <div className="mt-1 flex justify-between"><span>Alíquota ICMS estadual:</span><span className="font-semibold">35,00%</span></div>
                <div className="my-2 border-t border-foreground/10" />
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0c2d6b]">TOTAL DA GUIA ICMS</span>
                  <span className="text-lg font-extrabold text-[#0c2d6b]">{formatBRL(icmsCentavos / 100)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pb-4">
            <button
              onClick={() => setShowPix(true)}
              className="w-full rounded-md bg-[#0c2d6b] py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0a2458]"
            >
              Regularizar pendência e liberar produto
            </button>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              Guia emitida automaticamente pela Receita Federal · Recolhimento via PIX
            </p>
          </div>
        </div>
      </div>

      {/* Popup do PIX */}
      {showPix && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center" onClick={() => setShowPix(false)}>
          <div
            className="w-full max-w-md overflow-hidden rounded-t-2xl bg-background shadow-xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b bg-[#0c2d6b] px-5 py-3 text-white">
              <p className="text-sm font-bold">Recolhimento ICMS — PIX</p>
              <button onClick={() => setShowPix(false)} aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-5 py-4">
              {creating || !childId ? (
                <div className="flex flex-col items-center gap-2 py-10 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <p className="text-xs">Gerando guia PIX...</p>
                </div>
              ) : (
                <PixDisplay externalId={childId} />
              )}
              {error && <p className="mt-2 text-center text-xs text-red-600">{error}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
