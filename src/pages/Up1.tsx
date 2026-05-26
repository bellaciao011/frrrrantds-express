import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatBRL } from "@/data/products";

interface OrderItem {
  id?: string;
  name: string;
  quantity?: number;
  price?: number;
}

interface OrderRow {
  external_id: string;
  amount: number;
  buyer_name: string;
  buyer_email?: string | null;
  buyer_document?: string | null;
  buyer_phone?: string | null;
  items: OrderItem[] | null;
  status: string;
}

function maskCpf(doc?: string | null): string {
  if (!doc) return "—";
  const d = doc.replace(/\D/g, "");
  if (d.length !== 11) return doc;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

function formatDateBR(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function genNfeNumber(externalId: string): string {
  // Gera um número de NF-e estável a partir do external_id (apenas visual)
  let hash = 0;
  for (let i = 0; i < externalId.length; i++) {
    hash = (hash * 31 + externalId.charCodeAt(i)) >>> 0;
  }
  return String(hash).padStart(9, "0").slice(0, 9);
}

export default function Up1Page() {
  const { externalId = "" } = useParams<{ externalId: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(
          "external_id,amount,buyer_name,buyer_email,buyer_document,buyer_phone,items,status",
        )
        .eq("external_id", externalId)
        .maybeSingle();
      if (!alive) return;
      if (error) console.error(error);
      setOrder(data as OrderRow | null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [externalId]);

  const items: OrderItem[] = useMemo(() => {
    if (!order?.items) return [];
    if (Array.isArray(order.items)) return order.items;
    return [];
  }, [order]);

  const valorPagoCentavos = order?.amount ?? 0;
  const taxaCentavos = Math.round(valorPagoCentavos * 0.4);

  const nfeNumber = useMemo(
    () => (order ? genNfeNumber(order.external_id) : "000000000"),
    [order],
  );
  const protocol = useMemo(
    () => (order ? `${nfeNumber}-${new Date().getFullYear()}` : "—"),
    [order, nfeNumber],
  );
  const todayBR = useMemo(() => formatDateBR(new Date()), []);

  const handleGenerate = async () => {
    if (!order || generating) return;
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-pix", {
        body: {
          amount: taxaCentavos,
          buyer: {
            name: order.buyer_name,
            email: order.buyer_email ?? "comprador@email.com",
            document: order.buyer_document ?? undefined,
            phone: order.buyer_phone ?? undefined,
          },
          items: [
            {
              id: "nfe-taxa",
              name: `Taxa NF-e referente ao pedido #${order.external_id}`,
              price: taxaCentavos / 100,
              quantity: 1,
            },
          ],
          store_slug: "up1",
        },
      });
      if (error) throw error;
      const newId = (data as { external_id?: string })?.external_id;
      if (!newId) throw new Error("Falha ao criar pagamento");
      navigate(`/pix/${newId}`);
    } catch (e) {
      console.error(e);
      alert("Não foi possível gerar o pagamento. Tente novamente.");
      setGenerating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground">Pedido não encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
        >
          Voltar à loja
        </button>
      </div>
    );
  }

  const firstName = order.buyer_name.split(" ")[0];

  return (
    <div className="min-h-screen bg-muted/30 py-6">
      <Helmet>
        <title>Emissão de Nota Fiscal — NF-e</title>
      </Helmet>

      <div className="mx-auto max-w-md space-y-4 px-3">
        {/* Aviso de obrigatoriedade */}
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
          <h1 className="flex items-center justify-center gap-2 text-base font-bold text-red-700">
            <AlertTriangle className="h-5 w-5" />
            Emissão de Nota Fiscal obrigatória
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-red-700">
            Por determinação da Lei Federal nº 14.218/2021, todo produto
            comercializado deve ter a NF-e emitida antes da liberação da entrega.
            O valor cobrado corresponde a <strong>40% do total do pedido</strong>{" "}
            — base de cálculo prevista na legislação tributária vigente.
          </p>
        </div>

        {/* DANFE */}
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between gap-3 px-5 py-5">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0c2d6b] text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0c2d6b]">
                  Receita
                </p>
                <p className="text-sm font-bold text-[#0c2d6b]">Federal</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-extrabold leading-none text-foreground">DANFE</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                Documento
                <br />
                Auxiliar da NF-e
              </p>
            </div>
            <div className="text-right leading-tight">
              <p className="text-xs font-bold">
                <span className="text-[#1f7a3a]">NFS</span>
                <span className="text-[#0c5fb3]">e</span>
              </p>
              <p className="text-[9px] text-muted-foreground">
                Nota Fiscal de
                <br />
                Serviço eletrônica
              </p>
            </div>
          </div>

          <div className="border-t px-5 py-3 text-center text-sm">
            NF-e Nº <strong>{nfeNumber}</strong> — Série 001
          </div>

          {/* Emitente */}
          <div className="border-t px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Emitente
            </p>
            <p className="mt-2 text-sm font-bold">BERZERK COMÉRCIO LTDA.</p>
            <p className="mt-1 text-xs text-muted-foreground">
              CNPJ: 47.508.411/0001-56 | IE: 110.842.557.119
            </p>
            <p className="text-xs text-muted-foreground">
              Av. Brigadeiro Faria Lima, 1755 — São Paulo/SP — CEP: 01452-001
            </p>
          </div>

          {/* Destinatário */}
          <div className="border-t px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Destinatário / Comprador
            </p>
            <div className="mt-2 flex items-start justify-between gap-3 text-sm">
              <p className="font-medium">{order.buyer_name || "—"}</p>
              <p className="text-muted-foreground">
                CPF: <span className="text-foreground">{maskCpf(order.buyer_document)}</span>
              </p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              E-mail de entrega: {order.buyer_email ?? "—"}
            </p>
          </div>

          {/* Produtos */}
          <div className="border-t px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Produto / Mercadoria
            </p>
            <ul className="mt-2 space-y-2">
              {items.length === 0 ? (
                <li className="text-sm font-bold">PRODUTO</li>
              ) : (
                items.map((it, idx) => (
                  <li key={idx} className="text-sm">
                    <p className="font-bold uppercase">{it.name}</p>
                    {it.quantity ? (
                      <p className="text-xs text-muted-foreground">
                        Qtd: {it.quantity}
                        {typeof it.price === "number" ? ` — ${formatBRL(it.price)}` : ""}
                      </p>
                    ) : null}
                  </li>
                ))
              )}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Ref. pedido: #{order.external_id}
            </p>
          </div>

          {/* Valores fiscais */}
          <div className="border-t px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Valores Fiscais
            </p>
            <div className="mt-2 space-y-1.5 text-sm">
              <div className="flex items-center justify-between">
                <span>Valor pago</span>
                <span className="font-semibold">{formatBRL(valorPagoCentavos / 100)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Base de cálculo NF-e (40%)</span>
                <span className="font-semibold">{formatBRL(taxaCentavos / 100)}</span>
              </div>
              <div className="my-2 border-t" />
              <div className="flex items-center justify-between">
                <span className="font-bold">VALOR TOTAL DA NF-e</span>
                <span className="text-xl font-extrabold text-red-600">
                  {formatBRL(taxaCentavos / 100)}
                </span>
              </div>
            </div>
          </div>

          {/* Datas */}
          <div className="grid grid-cols-2 gap-3 border-t px-5 py-4 text-xs">
            <div>
              <p className="text-muted-foreground">Data de emissão:</p>
              <p className="mt-0.5 font-medium">{todayBR}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Protocolo de autorização:</p>
              <p className="mt-0.5 font-medium">{protocol}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t px-5 py-6">
            <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Pagamento via Pix — Receita Federal
            </p>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#0c2d6b] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-opacity hover:opacity-95 disabled:opacity-60"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Gerando...
                </>
              ) : (
                "Gerar pagamento"
              )}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              {firstName}, sua entrega só será liberada após a quitação da NF-e.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground">
          Pedido #{order.external_id}
        </p>
      </div>
    </div>
  );
}
