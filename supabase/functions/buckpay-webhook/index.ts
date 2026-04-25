// Recebe webhooks da BuckPay (transaction.created e transaction.processed)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    console.log("[buckpay-webhook] event:", payload?.event, "id:", payload?.data?.id);

    const event: string = payload?.event ?? "";
    const data = payload?.data ?? {};
    const txId: string | undefined = data.id;
    const status: string | undefined = data.status;

    if (!txId) return new Response(JSON.stringify({ ok: true }), { status: 200 });

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const update: Record<string, unknown> = {};
    if (status) update.status = status;
    if (event === "transaction.processed" || status === "paid") {
      update.status = "paid";
      update.paid_at = new Date().toISOString();
    }

    if (Object.keys(update).length > 0) {
      const { error } = await supa.from("orders").update(update).eq("transaction_id", txId);
      if (error) console.error("[buckpay-webhook] update error", error);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[buckpay-webhook]", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  }
});
