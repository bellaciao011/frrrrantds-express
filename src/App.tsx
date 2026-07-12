import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProdutoPage from "@/pages/Produto";
import Pre from "@/pages/Pre";
import TikTokPixelLoader from "@/components/TikTokPixelLoader";
import ScrollToTop from "@/components/ScrollToTop";
import UtmPersistence from "@/components/UtmPersistence";

const PRODUCT_PATH = "/produto/robo-aspirador-mopa-19000pa";

function PixelRedirect() {
  useEffect(() => {
    window.location.replace("/pixel.html" + window.location.search);
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <TikTokPixelLoader />
      <ScrollToTop />
      <UtmPersistence />
      <Routes>
        <Route path="/produto/:id" element={<ProdutoPage />} />
        <Route path="/pre" element={<Pre />} />
        <Route path="/pixel" element={<PixelRedirect />} />
        <Route path="*" element={<Navigate to={PRODUCT_PATH} replace />} />
      </Routes>
    </>
  );
}
