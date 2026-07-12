import { Routes, Route, Navigate } from "react-router-dom";
import ProdutoPage from "@/pages/Produto";
import TikTokPixelLoader from "@/components/TikTokPixelLoader";
import ScrollToTop from "@/components/ScrollToTop";
import UtmPersistence from "@/components/UtmPersistence";

const PRODUCT_PATH = "/produto/robo-aspirador-mopa-19000pa";

export default function App() {
  return (
    <>
      <TikTokPixelLoader />
      <ScrollToTop />
      <UtmPersistence />
      <Routes>
        <Route path="/produto/:id" element={<ProdutoPage />} />
        <Route path="*" element={<Navigate to={PRODUCT_PATH} replace />} />
      </Routes>
    </>
  );
}
