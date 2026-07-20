import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";

export interface SavedAddress {
  name: string;
  phone: string;
  email: string;
  doc: string;
  cep: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
  complement: string;
  isDefault: boolean;
}

const STORAGE_KEY = "checkout_address";

export function loadSavedAddress(): SavedAddress | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedAddress;
  } catch {
    return null;
  }
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function maskCpf(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function maskCep(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  return d.replace(/(\d{5})(\d)/, "$1-$2");
}

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(14).max(20),
  email: z.string().trim().email().max(255),
  doc: z.string().trim().min(11).max(20),
  cep: z.string().trim().min(9).max(10),
  state: z.string().trim().min(1).max(80),
  city: z.string().trim().min(1).max(80),
  district: z.string().trim().min(1).max(120),
  address: z.string().trim().min(2).max(200),
  number: z.string().trim().min(1).max(20),
  complement: z.string().trim().max(120).optional().or(z.literal("")),
});

export default function AddressSheet({
  open,
  onClose,
  onSaved,
  onBack,
}: {
  open: boolean;
  onClose: () => void;
  onSaved: (a: SavedAddress) => void;
  onBack?: () => void;
}) {
  const [data, setData] = useState<SavedAddress>({
    name: "", phone: "", email: "", doc: "",
    cep: "", state: "", city: "", district: "",
    address: "", number: "", complement: "",
    isDefault: true,
  });
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const saved = loadSavedAddress();
    if (saved) setData(saved);
  }, [open]);

  // Autocomplete via ViaCEP
  useEffect(() => {
    const raw = data.cep.replace(/\D/g, "");
    if (raw.length !== 8) return;
    let alive = true;
    fetch(`https://viacep.com.br/ws/${raw}/json/`)
      .then((r) => r.json())
      .then((d) => {
        if (!alive || !d || d.erro) return;
        setData((prev) => ({
          ...prev,
          address: prev.address || d.logradouro || "",
          district: prev.district || d.bairro || "",
          city: prev.city || d.localidade || "",
          state: prev.state || d.uf || "",
        }));
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [data.cep]);

  if (!open) return null;

  const set = <K extends keyof SavedAddress>(k: K, v: SavedAddress[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const save = () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErr("Preencha todos os campos obrigatórios.");
      return;
    }
    setErr(null);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {/* ignore */}
    onSaved(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f5f5f7]">
      <header className="flex items-center bg-white px-3 py-3 shadow-sm">
        <button onClick={onBack ?? onClose} aria-label="Voltar" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="flex-1 text-center pr-9 text-base font-bold">Adicionar novo endereço</h1>
      </header>

      <div className="flex-1 overflow-y-auto pb-28">
        <SectionTitle>Informações de contato</SectionTitle>
        <div className="divide-y bg-white">
          <Row>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Nome completo"
              maxLength={120}
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </Row>
          <Row>
            <span className="mr-3 shrink-0 text-sm text-foreground">BR +55</span>
            <input
              inputMode="tel"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="(00) 00000-0000"
              maxLength={20}
              value={data.phone}
              onChange={(e) => set("phone", maskPhone(e.target.value))}
            />
          </Row>
          <Row>
            <input
              type="email"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="E-mail"
              maxLength={255}
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </Row>
          <Row>
            <input
              inputMode="numeric"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="CPF"
              maxLength={14}
              value={data.doc}
              onChange={(e) => set("doc", maskCpf(e.target.value))}
            />
          </Row>
        </div>

        <SectionTitle>Informações de endereço</SectionTitle>
        <div className="divide-y bg-white">
          <Row>
            <input
              inputMode="numeric"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="CEP (00000-000)"
              maxLength={10}
              value={data.cep}
              onChange={(e) => set("cep", maskCep(e.target.value))}
            />
          </Row>
          <div className="flex divide-x">
            <div className="flex-1 px-4 py-3.5">
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Estado"
                maxLength={2}
                value={data.state}
                onChange={(e) => set("state", e.target.value.toUpperCase().slice(0, 2))}
              />
            </div>
            <div className="flex-1 px-4 py-3.5">
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                placeholder="Cidade"
                maxLength={80}
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
              />
            </div>
          </div>
          <Row>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Bairro"
              maxLength={120}
              value={data.district}
              onChange={(e) => set("district", e.target.value)}
            />
          </Row>
          <Row>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Endereço (Rua / Avenida)"
              maxLength={200}
              value={data.address}
              onChange={(e) => set("address", e.target.value)}
            />
          </Row>
          <Row>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder='Número (escreva "s/n" se não tiver)'
              maxLength={20}
              value={data.number}
              onChange={(e) => set("number", e.target.value)}
            />
          </Row>
          <Row>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Apartamento, bloco, referência (opcional)"
              maxLength={120}
              value={data.complement}
              onChange={(e) => set("complement", e.target.value)}
            />
          </Row>
        </div>

        <SectionTitle>Configuração</SectionTitle>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-sm">Definir como endereço padrão</span>
            <button
              type="button"
              onClick={() => set("isDefault", !data.isDefault)}
              className={`relative h-6 w-11 rounded-full transition ${data.isDefault ? "bg-rose-500" : "bg-gray-300"}`}
              aria-pressed={data.isDefault}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${data.isDefault ? "left-[22px]" : "left-0.5"}`}
              />
            </button>
          </div>
        </div>

        <p className="px-6 pt-4 text-center text-xs text-muted-foreground">
          Ao continuar você concorda com a nossa{" "}
          <span className="font-semibold text-rose-500">Política de privacidade</span>.
        </p>

        {err && <p className="mt-3 px-6 text-center text-xs text-rose-600">{err}</p>}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 border-t bg-white p-3">
        <button
          onClick={save}
          className="w-full rounded-full bg-rose-500 py-3.5 text-sm font-bold text-white shadow-md active:scale-[0.99]"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="px-4 pb-2 pt-4 text-xs text-muted-foreground">{children}</h2>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center px-4 py-3.5">{children}</div>;
}
