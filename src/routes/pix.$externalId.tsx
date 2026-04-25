import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Copy, Loader2, QrCode } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatBRL } from "@/data/products";

export const Route = createFileRoute("/pix/$externalId")({
  component: PixPage,
  head: () => ({ meta: [{ title: "Pagamento Pix" }] }),
});

interface OrderRow {
  external_id: string;
  status: string;
  amount: number;
  pix_code: string | null;
  pix_qrcode: string | null;
  buyer_name: string;
}

function PixPage() {
  const { externalId } = Route.useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [qrFromCode, setQrFromCode] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  // Carrega o pedido
  useEffect(() => {
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("external_id,status,amount,pix_code,pix_qrcode,buyer_name")
        .eq("external_id", externalId)
        .maybeSingle();
      if (!alive) return;
      if (error) console.error(error);
      setOrder(data ?? null);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, [externalId]);

  // Realtime: escuta mudanças no pedido
  useEffect(() => {
    const channel = supabase
      .channel(`order-${externalId}`)
      .on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "orders",
        filter: `external_id=eq.${externalId}`,
      }, (payload) => {
        const row = payload.new as OrderRow;
        setOrder((prev) => ({ ...(prev ?? row), ...row }));
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [externalId]);

  // Polling de fallback: consulta a API a cada 6s enquanto pendente
  useEffect(() => {
    if (!order || order.status === "paid") return;
    const id = setInterval(async () => {
      try {
        await supabase.functions.invoke("check-order", {
          body: { external_id: externalId },
        });
      } catch (e) {
        console.warn(e);
      }
    }, 6000);
    return () => clearInterval(id);
  }, [order, externalId]);

  // Gera QR a partir do código se a base64 não vier
  useEffect(() => {
    if (!order?.pix_code || order.pix_qrcode) return;
    QRCode.toDataURL(order.pix_code, { width: 320, margin: 1 })
      .then(setQrFromCode)
      .catch(console.error);
  }, [order?.pix_code, order?.pix_qrcode]);

  // Contagem regressiva
  useEffect(() => {
    if (!order || order.status === "paid") return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [order]);

  const qrSrc = useMemo(() => {
    if (order?.pix_qrcode) {
      return order.pix_qrcode.startsWith("data:")
        ? order.pix_qrcode
        : `data:image/png;base64,${order.pix_qrcode}`;
    }
    return qrFromCode;
  }, [order?.pix_qrcode, qrFromCode]);

  const copy = async () => {
    if (!order?.pix_code) return;
    try {
      await navigator.clipboard.writeText(order.pix_code);
      toast.success("Código Pix copiado!");
    } catch {
      toast.error("Não foi possível copiar.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground">Pedido não encontrado.</p>
        <button onClick={() => navigate({ to: "/" })} className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground">
          Voltar à loja
        </button>
      </div>
    );
  }

  if (order.status === "paid") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 text-center">
        <CheckCircle2 className="h-20 w-20 text-shipping-fg" />
        <h1 className="mt-4 text-2xl font-bold">Pagamento confirmado!</h1>
        <p className="mt-2 text-muted-foreground">Obrigado, {order.buyer_name.split(" ")[0]}. Em instantes você receberá o e-mail com os detalhes do pedido.</p>
        <p className="mt-2 text-sm text-muted-foreground">Pedido #{order.external_id}</p>
        <button onClick={() => navigate({ to: "/" })} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Voltar à loja
        </button>
      </div>
    );
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-muted/30 pb-12">
      <header className="sticky top-0 z-40 flex h-12 items-center gap-3 border-b bg-background px-3">
        <button onClick={() => navigate({ to: "/" })} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="font-semibold">Pagamento via Pix</h1>
      </header>

      <div className="mx-auto max-w-md space-y-3 p-3">
        <div className="rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 p-4 text-center text-white">
          <p className="text-xs opacity-90">Aguardando pagamento</p>
          <p className="mt-1 text-3xl font-extrabold">{formatBRL(order.amount / 100)}</p>
          <p className="mt-1 text-xs opacity-90">Expira em {mm}:{ss}</p>
        </div>

        <div className="rounded-xl bg-background p-4 text-center">
          <h2 className="flex items-center justify-center gap-2 font-semibold">
            <QrCode className="h-4 w-4" /> Escaneie o QR Code
          </h2>
          <div className="mx-auto mt-3 flex aspect-square w-64 items-center justify-center rounded-lg border bg-white p-2">
            {qrSrc ? (
              <img src={qrSrc} alt="QR Code Pix" className="h-full w-full object-contain" />
            ) : (
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            )}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">ou copie o código abaixo:</p>
          <div className="mt-2 flex items-center gap-2">
            <input
              readOnly
              value={order.pix_code ?? ""}
              className="flex-1 truncate rounded-lg border bg-muted px-3 py-2 text-xs"
            />
            <button
              onClick={copy}
              className="flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
            >
              <Copy className="h-3.5 w-3.5" /> Copiar
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-background p-4 text-sm">
          <h3 className="font-semibold">Como pagar</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted-foreground">
            <li>Abra o app do seu banco</li>
            <li>Escolha pagar com Pix → Copia e cola (ou QR Code)</li>
            <li>Confirme o pagamento</li>
            <li>Esta página confirma automaticamente</li>
          </ol>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Pedido #{order.external_id}
        </p>
      </div>
    </div>
  );
}
