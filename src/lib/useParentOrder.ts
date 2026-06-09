import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ParentOrder {
  external_id: string;
  amount: number;
  buyer_name: string;
  buyer_email?: string | null;
  buyer_document?: string | null;
  buyer_phone?: string | null;
  ttclid?: string | null;
  items?: Array<{ id?: string; name?: string; price?: number; quantity?: number }> | null;
}

export function useParentOrder(externalId: string) {
  const [order, setOrder] = useState<ParentOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!externalId) {
      setLoading(false);
      return;
    }
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("external_id,amount,buyer_name,buyer_email,buyer_document,buyer_phone,ttclid,items")
        .eq("external_id", externalId)
        .maybeSingle();
      if (!alive) return;
      if (error) console.error(error);
      setOrder((data as ParentOrder | null) ?? null);
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [externalId]);

  return { order, loading };
}
