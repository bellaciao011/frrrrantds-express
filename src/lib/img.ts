// Helper para otimizar carregamento de imagens via Supabase Image Transformation.
// Converte URLs do storage público "/object/public/" em "/render/image/public/"
// com redimensionamento automático para reduzir tráfego e tempo de download.

export interface ImgOpts {
  width?: number;
  height?: number;
  quality?: number; // 1-100
  resize?: "cover" | "contain" | "fill";
}

export function optimizedImg(
  url: string | null | undefined,
  opts: ImgOpts = {},
): string {
  if (!url) return "";
  const { width = 320, quality = 70, resize = "cover" } = opts;

  // Apenas processa URLs do Supabase Storage público
  if (url.includes("/storage/v1/object/public/")) {
    const transformed = url.replace(
      "/storage/v1/object/public/",
      "/storage/v1/render/image/public/",
    );
    const params = new URLSearchParams();
    params.set("width", String(width));
    if (opts.height) params.set("height", String(opts.height));
    params.set("quality", String(quality));
    params.set("resize", resize);
    return `${transformed}?${params.toString()}`;
  }

  return url;
}

// Gera srcset para 1x/2x retina
export function optimizedSrcSet(
  url: string | null | undefined,
  baseWidth: number,
  quality = 70,
): string {
  if (!url || !url.includes("/storage/v1/object/public/")) return "";
  return [
    `${optimizedImg(url, { width: baseWidth, quality })} 1x`,
    `${optimizedImg(url, { width: baseWidth * 2, quality })} 2x`,
  ].join(", ");
}
