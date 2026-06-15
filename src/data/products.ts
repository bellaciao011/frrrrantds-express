// Catálogo gerado automaticamente
import imgRosa from "@/assets/sandalia/257610f2-67af-4bd6-99f9-f2f22b706aae.png.asset.json";
import imgTurquesa from "@/assets/sandalia/61e0f590-2b44-4eeb-bfce-9a82f59245d6.png.asset.json";
import imgNude1 from "@/assets/sandalia/0dfcb5b9-e9bc-4fa2-8b40-7db5223aa2fb.png.asset.json";
import imgNude2 from "@/assets/sandalia/75aa016f-465a-4a6a-bc9e-4209577b871d.png.asset.json";
import imgNude3 from "@/assets/sandalia/24478317-e870-42ad-b335-664968e6c444.png.asset.json";
import imgBronze1 from "@/assets/sandalia/a2a66000-44db-443d-aa32-f7142989cc78.png.asset.json";
import imgBronze2 from "@/assets/sandalia/3ef89a03-5711-45f5-b015-7039392b7307.png.asset.json";
import imgPreta1 from "@/assets/sandalia/96002507-8a94-4803-b036-ffd2d6049639.png.asset.json";
import imgPreta2 from "@/assets/sandalia/84a49136-813e-4551-8ba2-9ada71ebdd0a.png.asset.json";

export interface ProductVariation {
  titulo: string;
  imagem: string;
  tipo: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  images: string[];
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  variacoes: ProductVariation[];
  sold?: number;
}

const SIZES: ProductVariation[] = [
  "33", "34", "35", "36", "37", "38", "39",
].map((t) => ({ titulo: t, imagem: "", tipo: "tamanho" }));

const DESCRIPTION =
  "Sandália Birken Papete Feminina Luxo com aplicação artesanal de strass e pérolas. Duas fivelas ajustáveis para encaixe perfeito, palmilha anatômica acolchoada e solado emborrachado antiderrapante. Conforto máximo o dia todo com um toque de brilho e elegância. Coleção Verão 2026.";

const cor = (titulo: string, imagem: string): ProductVariation => ({ titulo, imagem, tipo: "cor" });

const CORES: ProductVariation[] = [
  cor("Rosa", imgRosa.url),
  cor("Turquesa", imgTurquesa.url),
  cor("Nude Pérolas", imgNude1.url),
  cor("Bronze", imgBronze1.url),
  cor("Preta", imgPreta1.url),
];

const GALERIA: string[] = [
  imgRosa.url,
  imgTurquesa.url,
  imgNude1.url, imgNude2.url, imgNude3.url,
  imgBronze1.url, imgBronze2.url,
  imgPreta1.url, imgPreta2.url,
];

export const products: Product[] = [
  {
    id: "sandalia-birken-strass-perolas",
    name: "Sandália Birken Papete Feminina Luxo Strass e Pérolas Duas Fivelas Verão 2026",
    image: imgNude1.url,
    images: GALERIA,
    price: 89.90,
    originalPrice: 299.90,
    discount: 70,
    description: DESCRIPTION,
    variacoes: [...CORES, ...SIZES],
    sold: 1248,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Lista expandida: cada cor vira um "produto" na vitrine.
// Mantém o mesmo id base para que a página /produto/:id continue funcionando.
export const listingProducts: Product[] = products.flatMap((p) => {
  const cores = p.variacoes.filter((v) => v.tipo === "cor");
  const tamanhos = p.variacoes.filter((v) => v.tipo === "tamanho");
  if (cores.length === 0) return [p];
  return cores.map((c) => ({
    ...p,
    id: p.id,
    name: `${p.name} - ${c.titulo}`,
    image: c.imagem,
    images: [c.imagem, ...p.images.filter((i) => i !== c.imagem)],
    variacoes: tamanhos,
  }));
});
