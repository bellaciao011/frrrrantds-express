import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { captureTrackingParams, getStoredParams } from "@/utils/utm";

/**
 * Garante que UTMs/ttclid/fbclid/gclid persistam em todas as rotas.
 * - Captura da URL inicial e salva em sessionStorage.
 * - Em cada navegação, se a URL atual não tiver os params salvos, re-injeta sem recarregar.
 */
export default function UtmPersistence() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    captureTrackingParams();
    const stored = getStoredParams();
    if ([...stored.keys()].length === 0) return;

    const current = new URLSearchParams(location.search);
    let missing = false;
    stored.forEach((value, key) => {
      if (!current.has(key)) {
        current.set(key, value);
        missing = true;
      }
    });

    if (missing) {
      navigate(`${location.pathname}?${current.toString()}${location.hash}`, {
        replace: true,
      });
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  return null;
}
