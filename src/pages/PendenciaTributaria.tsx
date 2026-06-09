import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Loader2, Timer, X } from "lucide-react";
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
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const icmsCentavos = useMemo(() => Math.round((parent?.amount ?? 0) * 0.35), [parent]);
  const productName = useMemo(() => {
    if (!parent?.items?.length) return "PRODUTO";
    return parent.items[0]?.name ?? "PRODUTO";
  }, [parent]);

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
  const firstName = parent.buyer_name.split(" ")[0];

  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>Pendência Tributária — ICMS</title>
      </Helmet>
      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Pedido #{shortId}</h1>
            <button onClick={() => navigate(getUrlWithUtm("/"))} className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="bg-[#0c2d6b] px-5 py-5 text-center text-white">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z"/></svg>
            </div>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide opacity-80">Ministério da Fazenda</p>
            <p className="text-base font-bold">Pendência Tributária — ICMS</p>
          </div>

          <div className="px-5 py-4">
            <div className="flex items-center justify-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm font-bold text-red-700">
              <Timer className="h-4 w-4" /> Prazo para regularização: {mm}:{ss}
            </div>

            <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2.5 text-xs text-amber-900">
              <p className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="h-4 w-4" /> Recolhimento de ICMS pendente
              </p>
              <p className="mt-1.5 leading-relaxed">
                Conforme legislação tributária estadual, é devido o recolhimento de ICMS sobre o valor
                de arrematação. <strong>O produto permanecerá retido até a quitação.</strong>
              </p>
            </div>

            <div className="mt-4 rounded-md border bg-muted/30 px-3 py-3 text-sm">
              <div className="flex justify-between"><span>Produto</span><span className="font-semibold truncate ml-2">{productName}</span></div>
              <div className="mt-1 flex justify-between"><span>Arrematante</span><span className="font-semibold">{firstName}</span></div>
              <div className="mt-1 flex justify-between"><span>Valor de arrematação</span><span className="font-semibold">{formatBRL(parent.amount / 100)}</span></div>
              <div className="mt-1 flex justify-between"><span>Alíquota ICMS</span><span className="font-semibold">35%</span></div>
              <div className="my-2 border-t" />
              <div className="flex justify-between">
                <span className="font-bold">Total a recolher</span>
                <span className="text-lg font-extrabold text-red-600">{formatBRL(icmsCentavos / 100)}</span>
              </div>
            </div>
          </div>

          <div className="border-t px-5 py-4">
            <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Pagamento via Pix — Receita Estadual
            </p>
            <div className="mt-3">
              {creating || !childId ? (
                <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <p className="text-xs">Gerando Pix do ICMS...</p>
                </div>
              ) : (
                <PixDisplay externalId={childId} />
              )}
              {error && <p className="mt-2 text-center text-xs text-red-600">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
