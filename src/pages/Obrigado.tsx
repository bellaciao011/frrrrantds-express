import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import { getUrlWithUtm } from "@/utils/utm";

export default function ObrigadoPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 text-center">
      <Helmet>
        <title>Obrigado pela compra!</title>
      </Helmet>
      <CheckCircle2 className="h-20 w-20 text-emerald-600" />
      <h1 className="mt-4 text-2xl font-bold">Tudo certo!</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Pagamento confirmado e pendências regularizadas. Seu pedido será despachado em breve e você
        receberá os detalhes por e-mail.
      </p>
      <button
        onClick={() => navigate(getUrlWithUtm("/"))}
        className="mt-6 rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-md"
      >
        Voltar à loja
      </button>
    </div>
  );
}
