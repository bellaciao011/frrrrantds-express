import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Check, Loader2 } from "lucide-react";

const PRODUCT_PATH = "/produto/robo-aspirador-mopa-19000pa";

export default function Pre() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleVerify = () => {
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => {
        navigate(PRODUCT_PATH + window.location.search, { replace: true });
      }, 500);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <Helmet><title>Verificação</title><meta name="description" content="Verificação de segurança" /></Helmet>

      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black mb-4">
            <ShieldCheck className="h-8 w-8 text-white" strokeWidth={2.2} />
          </div>
          <h1 className="text-xl font-bold text-black">Verificação de segurança</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Confirme que você é uma pessoa real para continuar.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <button
            onClick={handleVerify}
            disabled={status !== "idle"}
            className="w-full flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 text-left transition active:scale-[0.99]"
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-md border-2 ${
                status === "done"
                  ? "border-green-500 bg-green-500"
                  : status === "loading"
                  ? "border-neutral-300"
                  : "border-neutral-300 bg-white"
              }`}
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin text-neutral-500" />}
              {status === "done" && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
            </span>
            <span className="flex-1 text-sm font-medium text-black">
              Sou uma pessoa
            </span>
            <span className="text-[10px] leading-tight text-neutral-400 text-right">
              Privacidade<br />Termos
            </span>
          </button>
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-400">
          Protegido por verificação anti-bot
        </p>
      </div>
    </div>
  );
}
