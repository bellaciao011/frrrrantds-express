import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Loader2, Plus, Trash2, Power, PowerOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Pixel {
  id: string;
  pixel_id: string;
  access_token: string;
  store_slug: string;
  is_active: boolean;
  label: string | null;
  created_at: string;
}

export default function AdminPixelsPage() {
  const [list, setList] = useState<Pixel[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // form
  const [pixelId, setPixelId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [label, setLabel] = useState("");
  const [storeSlug, setStoreSlug] = useState("berzerk");

  const refresh = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tracking_pixels")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Erro ao carregar pixels: " + error.message);
    }
    setList((data as Pixel[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  const add = async () => {
    if (!pixelId.trim() || !accessToken.trim()) {
      toast.error("Pixel ID e Access Token são obrigatórios.");
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("tracking_pixels").insert({
      pixel_id: pixelId.trim(),
      access_token: accessToken.trim(),
      store_slug: storeSlug.trim() || "berzerk",
      label: label.trim() || null,
      is_active: true,
    });
    setSaving(false);
    if (error) {
      toast.error("Erro ao adicionar: " + error.message);
      return;
    }
    toast.success("Pixel adicionado!");
    setPixelId("");
    setAccessToken("");
    setLabel("");
    refresh();
  };

  const toggle = async (p: Pixel) => {
    const { error } = await supabase
      .from("tracking_pixels")
      .update({ is_active: !p.is_active })
      .eq("id", p.id);
    if (error) toast.error(error.message);
    else refresh();
  };

  const remove = async (p: Pixel) => {
    if (!confirm(`Excluir pixel ${p.pixel_id}?`)) return;
    const { error } = await supabase
      .from("tracking_pixels")
      .delete()
      .eq("id", p.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Pixel removido.");
      refresh();
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-4">
      <Helmet>
        <title>Admin · Pixels</title>
      </Helmet>
      <div className="mx-auto max-w-2xl space-y-4">
        <header>
          <h1 className="text-2xl font-bold">Pixels do TikTok</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie os pixels de tracking. O Access Token é usado para a Events API
            (server-side) e nunca é exposto ao navegador.
          </p>
        </header>

        {/* Form */}
        <section className="rounded-lg border bg-white p-4 space-y-3">
          <h2 className="font-semibold">Adicionar pixel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Pixel ID *">
              <input
                value={pixelId}
                onChange={(e) => setPixelId(e.target.value)}
                placeholder="C1234ABCD..."
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Rótulo (opcional)">
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Ex: Pixel Principal"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Loja (slug)">
              <input
                value={storeSlug}
                onChange={(e) => setStoreSlug(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Access Token *">
              <input
                type="password"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </Field>
          </div>
          <button
            onClick={add}
            disabled={saving}
            className="flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Adicionar
          </button>
        </section>

        {/* Lista */}
        <section className="rounded-lg border bg-white">
          <div className="border-b px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold">Pixels cadastrados</h2>
            <span className="text-xs text-muted-foreground">{list.length} total</span>
          </div>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : list.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">
              Nenhum pixel cadastrado ainda.
            </p>
          ) : (
            <div className="divide-y">
              {list.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold truncate">
                        {p.pixel_id}
                      </span>
                      {p.is_active ? (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                          ATIVO
                        </span>
                      ) : (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                          INATIVO
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {p.label || "—"} · loja: <code>{p.store_slug}</code>
                    </p>
                  </div>
                  <button
                    onClick={() => toggle(p)}
                    className="rounded-md border p-2 hover:bg-muted"
                    title={p.is_active ? "Desativar" : "Ativar"}
                  >
                    {p.is_active ? (
                      <PowerOff className="h-4 w-4 text-amber-600" />
                    ) : (
                      <Power className="h-4 w-4 text-emerald-600" />
                    )}
                  </button>
                  <button
                    onClick={() => remove(p)}
                    className="rounded-md border p-2 hover:bg-muted"
                    title="Excluir"
                  >
                    <Trash2 className="h-4 w-4 text-rose-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="text-xs text-muted-foreground">
          ℹ️ Esta página é pública. Não compartilhe o link.
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold">{label}</label>
      {children}
    </div>
  );
}
