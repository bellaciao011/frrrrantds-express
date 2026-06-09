import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, X } from "lucide-react";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm } from "@/utils/utm";

function maskCpf(doc?: string | null) {
  if (!doc) return "—";
  const d = doc.replace(/\D/g, "");
  if (d.length !== 11) return doc;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

export default function PreviewNotaFiscalPage() {
  const navigate = useNavigate();
  const [showDanfe, setShowDanfe] = useState(false);

  const parentAmount = 12990;
  const taxaCentavos = Math.round(parentAmount * 0.4);
  const nfeNumber = "123456789";
  const productName = "Tênis Masculino Berzerk";
  const buyerName = "João da Silva";
  const buyerDocument = "12345678901";
  const buyerEmail = "joao@email.com";

  if (!showDanfe) {
    return (
      <div className="min-h-screen bg-muted/30 py-4">
        <Helmet>
          <title>Pendência Receita Federal — NF-e</title>
        </Helmet>
        <div className="mx-auto max-w-md px-3">
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h1 className="text-base font-bold">Pedido #ABC</h1>
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
                  Calculado sobre 40% do valor de arrematação: {formatBRL(parentAmount / 100)}
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

  // DANFE + PIX preview
  return (
    <div className="min-h-screen bg-muted/30 py-4">
      <Helmet>
        <title>DANFE — Pagamento NF-e</title>
      </Helmet>
      <div className="mx-auto max-w-md px-3">
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h1 className="text-base font-bold">Pedido #ABC</h1>
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
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Destinatário</p>
              <div className="mt-1 flex justify-between gap-3">
                <p className="font-medium">{buyerName}</p>
                <p className="text-muted-foreground">CPF: <span className="text-foreground">{maskCpf(buyerDocument)}</span></p>
              </div>
              <p className="mt-1 text-muted-foreground">E-mail: {buyerEmail}</p>
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Produto / Mercadoria</p>
              <p className="mt-1 text-sm font-bold uppercase">{productName}</p>
              <p className="text-muted-foreground">Ref. pedido: #ABC123</p>
            </div>

            <div className="border-t px-4 py-3 text-xs">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Valores Fiscais</p>
              <div className="mt-1 space-y-1">
                <div className="flex justify-between"><span>Valor pago</span><span className="font-semibold">{formatBRL(parentAmount / 100)}</span></div>
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
            <div className="mt-3 rounded-xl border bg-white p-4 text-center">
              <p className="text-xs text-muted-foreground">(Preview — Pix simulado)</p>
              <p className="mt-1 text-2xl font-bold">{formatBRL(taxaCentavos / 100)}</p>
              <div className="mx-auto mt-4 flex aspect-square w-56 items-center justify-center rounded-lg border bg-muted">
                <span className="text-xs text-muted-foreground">QR Code</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Código Pix simulado</p>
            </div>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              João, sua entrega só será liberada após a quitação da NF-e.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
