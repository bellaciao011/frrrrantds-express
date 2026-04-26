import { Routes, Route, Link } from "react-router-dom";
import IndexPage from "@/pages/Index";
import CarrinhoPage from "@/pages/Carrinho";
import CheckoutPage from "@/pages/Checkout";
import ProdutoPage from "@/pages/Produto";
import PixPage from "@/pages/Pix";
import AdminPixelsPage from "@/pages/AdminPixels";
import TikTokPixelLoader from "@/components/TikTokPixelLoader";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Ir para a loja
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <TikTokPixelLoader />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/produto/:id" element={<ProdutoPage />} />
        <Route path="/pix/:externalId" element={<PixPage />} />
        <Route path="/admin/pixels" element={<AdminPixelsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
