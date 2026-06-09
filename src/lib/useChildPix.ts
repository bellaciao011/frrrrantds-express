import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ParentOrder {
  external_id: string;
  buyer_name: string;
  buyer_email?: string | null;
  buyer_document?: string | null;
  buyer_phone?: string | null;
  ttclid?: string | null;
}

interface Params {
  parent: ParentOrder | null;
  amountCents: number;
  storeSlug: string;
  itemId: string;
  itemName: string; // deve conter "#<parent.external_id>" para o roteamento pós-pagamento
  autoStart?: boolean;
}

export function useChildPix({ parent, amountCents, storeSlug, itemId, itemName, autoStart = true }: Params) {
  const [childId, setChildId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(autoStart);

  useEffect(() => {
    if (!started || !parent || childId || loading) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke("create-pix", {
          body: {
            amount: amountCents,
            buyer: {
              name: parent.buyer_name,
              email: parent.buyer_email ?? "comprador@email.com",
              document: parent.buyer_document ?? undefined,
              phone: parent.buyer_phone ?? undefined,
            },
            items: [
              {
                id: itemId,
                name: itemName,
                price: amountCents / 100,
                quantity: 1,
              },
            ],
            ttclid: parent.ttclid ?? undefined,
            store_slug: storeSlug,
          },
        });
        if (cancelled) return;
        if (error) throw error;
        const newId = (data as { external_id?: string })?.external_id;
        if (!newId) throw new Error("Falha ao gerar Pix.");
        setChildId(newId);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Erro ao gerar Pix.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [started, parent, amountCents, storeSlug, itemId, itemName, childId, loading]);

  return { childId, error, loading, start: () => setStarted(true), started };
}
