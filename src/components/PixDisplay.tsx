import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Copy, Loader2, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatBRL } from "@/data/products";
import { trackPurchaseClient } from "@/lib/tiktokPixel";
import { getUrlWithUtm } from "@/utils/utm";
import { copyText } from "@/lib/clipboard";


interface OrderRow {
  external_id: string;
  status: string;
  amount: number;
  pix_code: string | null;
  pix_qrcode: string | null;
  buyer_name: string;
  buyer_email?: string | null;
  buyer_phone?: string | null;
  ttclid?: string | null;
  store_slug?: string | null;
  items?: Array<{ name?: string; id?: string; price?: number; quantity?: number }> | null;
}

export default function PixDisplay({ externalId }: { externalId: string }) {
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [qrFromCode, setQrFromCode] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(
          "external_id,status,amount,pix_code,pix_qrcode,buyer_name,buyer_email,buyer_phone,ttclid,store_slug,items",
        )
        .eq("external_id", externalId)
        .maybeSingle();
      if (!alive) return;
      if (error) console.error(error);
      setOrder((data as unknown as OrderRow) ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [externalId]);

  useEffect(() => {
    const channel = supabase
      .channel(`order-${externalId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
          filter: `external_id=eq.${externalId}`,
        },
        (payload) => {
          const row = payload.new as OrderRow;
          setOrder((prev) => ({ ...(prev ?? row), ...row }));
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [externalId]);

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
    }, 5000);
    return () => clearInterval(id);
  }, [order, externalId]);

  useEffect(() => {
    if (!order?.pix_code || order.pix_qrcode) return;
    QRCode.toDataURL(order.pix_code, { width: 320, margin: 1 })
      .then(setQrFromCode)
      .catch(console.error);
  }, [order?.pix_code, order?.pix_qrcode]);

  useEffect(() => {
    if (!order || order.status === "paid") return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [order]);

  useEffect(() => {
    if (!order || order.status !== "paid") return;
    const itemsArr = Array.isArray(order.items)
      ? (order.items as Array<{ id?: string; name?: string; price?: number; quantity?: number }>)
      : [];
    const contents = itemsArr.length
      ? itemsArr.map((i) => ({
          content_id: String(i.id ?? order.external_id),
          content_type: "product" as const,
          content_name: i.name,
          quantity: i.quantity ?? 1,
          price: i.price,
        }))
      : undefined;
    trackPurchaseClient({
      value: order.amount / 100,
      currency: "BRL",
      email: order.buyer_email ?? undefined,
      phone: order.buyer_phone ?? undefined,
      order_id: order.external_id,
      ttclid: order.ttclid,
      contents,
      description: itemsArr[0]?.name,
    });
  }, [order?.status, order?.external_id]);

  useEffect(() => {
    if (!order || order.status !== "paid") return;
    const slug = (order.store_slug ?? "berzerk").toLowerCase();
    const itemsArr = Array.isArray(order.items) ? (order.items as Array<{ name?: string }>) : [];
    const refName = itemsArr[0]?.name ?? "";
    const match = refName.match(/#([A-Za-z0-9_-]+)/);
    const originalId = match?.[1];

    if (slug === "berzerk") {
      const t = setTimeout(() => navigate(getUrlWithUtm(`/frete/${order.external_id}`)), 1500);
      return () => clearTimeout(t);
    }
    if (slug === "sedex-upsell" && originalId) {
      const t = setTimeout(() => navigate(getUrlWithUtm(`/nota-fiscal/${originalId}`)), 1500);
      return () => clearTimeout(t);
    }
    if (slug === "nf" && originalId) {
      const t = setTimeout(() => navigate(getUrlWithUtm(`/pendencia-tributaria/${originalId}`)), 1500);
      return () => clearTimeout(t);
    }
    if (slug === "icms") {
      const t = setTimeout(() => navigate(getUrlWithUtm(`/obrigado`)), 1500);
      return () => clearTimeout(t);
    }
  }, [order?.status, order?.external_id, order?.store_slug, order?.items, navigate]);

  const qrSrc = useMemo(() => {
    const v = order?.pix_qrcode;
    if (v) {
      if (v.startsWith("data:")) return v;
      if (/^[A-Za-z0-9+/=\s]+$/.test(v) && !v.startsWith("00020")) {
        return `data:image/png;base64,${v}`;
      }
    }
    return qrFromCode;
  }, [order?.pix_qrcode, qrFromCode]);

  const copy = async () => {
    if (!order?.pix_code) return;
    const ok = await copyText(order.pix_code);
    if (ok) toast.success("Código Pix copiado!");
    else toast.error("Selecione e copie manualmente o código.");
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="rounded-md border bg-white p-4 text-center text-sm text-muted-foreground">
        Pedido não encontrado.
      </div>
    );
  }

  if (order.status === "paid") {
    return (
      <div className="flex flex-col items-center rounded-md border bg-white px-4 py-8 text-center">
        <CheckCircle2 className="h-16 w-16 text-emerald-600" />
        <h2 className="mt-3 text-xl font-bold">Pagamento confirmado!</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Obrigado, {order.buyer_name.split(" ")[0]}.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Pedido #{order.external_id}</p>
      </div>
    );
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="space-y-3">
      <div className="rounded-xl border bg-white p-4 text-center">
        <p className="text-xs font-medium text-muted-foreground">Aguardando pagamento</p>
        <p className="mt-1 text-2xl font-bold text-foreground">{formatBRL(order.amount / 100)}</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Expira em {mm}:{ss}
        </p>

        <div className="mx-auto mt-4 flex aspect-square w-56 items-center justify-center rounded-lg border bg-white p-2">
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
            className="flex items-center gap-1 rounded-lg bg-[#FF3366] px-3 py-2 text-xs font-semibold text-white"
          >
            <Copy className="h-3.5 w-3.5" /> Copiar
          </button>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-4 text-sm">
        <h3 className="font-semibold">Como pagar</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted-foreground">
          <li>Abra o app do seu banco</li>
          <li>Escolha pagar com Pix → Copia e cola (ou QR Code)</li>
          <li>Confirme o pagamento</li>
          <li>Esta tela confirma automaticamente</li>
        </ol>
      </div>

      <p className="text-center text-xs text-muted-foreground">Pedido #{order.external_id}</p>
    </div>
  );
}
