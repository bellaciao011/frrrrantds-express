import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock, Copy, Loader2, BadgeCheck } from "lucide-react";
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
  created_at?: string | null;
}

export default function PixDisplay({ externalId }: { externalId: string }) {
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [qrFromCode, setQrFromCode] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(24 * 3600 - 1);

  useEffect(() => {
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(
          "external_id,status,amount,pix_code,pix_qrcode,buyer_name,buyer_email,buyer_phone,ttclid,store_slug,items,created_at",
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
    if (!order?.pix_code) return;
    setQrFromCode(null);
    QRCode.toDataURL(order.pix_code, { width: 320, margin: 1 })
      .then(setQrFromCode)
      .catch((e) => {
        console.error("[PixDisplay] qrcode lib failed, using fallback", e);
        setQrFromCode(
          `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=4&data=${encodeURIComponent(
            order.pix_code ?? "",
          )}`,
        );
      });
  }, [order?.pix_code]);

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
      if (v.startsWith("data:") || v.startsWith("http")) return v;
      if (/^[A-Za-z0-9+/=\s]+$/.test(v) && !v.startsWith("00020")) {
        return `data:image/png;base64,${v}`;
      }
    }
    if (qrFromCode) return qrFromCode;
    if (order?.pix_code) {
      return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=4&data=${encodeURIComponent(
        order.pix_code,
      )}`;
    }
    return null;
  }, [order?.pix_qrcode, order?.pix_code, qrFromCode]);

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

  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const createdAt = order.created_at ? new Date(order.created_at) : new Date();
  const dateStr = createdAt.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const shortCode = order.pix_code
    ? order.pix_code.length > 34
      ? `${order.pix_code.slice(0, 34)}…`
      : order.pix_code
    : "";

  return (
    <div className="space-y-5 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[22px] font-bold leading-tight text-foreground">
            Aguardando o pagamento
          </h2>
          <p className="mt-1 text-[22px] font-bold text-foreground">
            {formatBRL(order.amount / 100)}
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">Vence em</span>
            <span className="inline-flex items-center gap-1 rounded-md bg-[#FF3366] px-2 py-0.5 font-semibold text-white">
              <Clock className="h-3 w-3" />
              {hh}:{mm}:{ss}
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">{dateStr}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A524]">
          <Clock className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Card do código Pix */}
      <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
            <g fill="#32BCAD">
              <path d="M9.5 22.5 4 17l5.5-5.5 2.1 2.1L8.2 17l3.4 3.4z" />
              <path d="M22.5 9.5 28 15l-5.5 5.5-2.1-2.1L23.8 15l-3.4-3.4z" />
              <path d="m14.9 24.9-2.1-2.1L20.6 15l-7.8-7.8 2.1-2.1L24.8 15z" />
            </g>
          </svg>
          <span className="text-sm font-bold tracking-wide text-foreground">PIX</span>
        </div>
        <p
          onClick={() => {
            const el = document.getElementById("pix-code-hidden") as HTMLInputElement | null;
            el?.select();
          }}
          className="mt-3 truncate font-mono text-[13px] text-foreground/80"
        >
          {shortCode}
        </p>
        <input
          id="pix-code-hidden"
          readOnly
          value={order.pix_code ?? ""}
          className="sr-only"
          aria-hidden
        />
        <button
          onClick={copy}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF3366] py-3 text-sm font-semibold text-white active:opacity-90"
        >
          <Copy className="h-4 w-4" />
          Copiar
        </button>
      </div>

      {/* QR opcional */}
      {qrSrc && (
        <details className="rounded-xl border bg-white p-3 text-sm">
          <summary className="cursor-pointer font-medium text-foreground">
            Preferir pagar com QR Code
          </summary>
          <div className="mx-auto mt-3 flex aspect-square w-48 items-center justify-center rounded-lg border bg-white p-2">
            <img src={qrSrc} alt="QR Code Pix" className="h-full w-full object-contain" />
          </div>
        </details>
      )}

      <p className="text-[13px] leading-relaxed text-muted-foreground">
        Para acessar esta página no app, abra{" "}
        <span className="font-semibold text-foreground">Loja</span> &gt;{" "}
        <span className="font-semibold text-foreground">Pedidos</span> &gt;{" "}
        <span className="font-semibold text-foreground">Sem pagamento</span> &gt;{" "}
        <span className="font-semibold text-foreground">Visualizar o código</span>
      </p>

      <div>
        <h3 className="text-[15px] font-bold text-foreground">Como fazer pagamentos com PIX?</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
          Copie o código de pagamento acima, selecione Pix no seu app de internet ou de banco e cole
          o código.
        </p>
      </div>

      <div>
        <h3 className="text-[15px] font-bold text-foreground">Você pagará para:</h3>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[14px] text-foreground">Meio Transacional Protegido LTDA</span>
          <BadgeCheck className="h-4 w-4 fill-[#1D9BF0] text-white" />
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          Essa é a instituição oficial do TikTok Shop. Só efetue o pagamento se ver esse nome na
          hora de pagar.
        </p>
      </div>

      <p className="text-center text-[11px] text-muted-foreground">Pedido #{order.external_id}</p>
    </div>
  );
}
