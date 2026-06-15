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
import imgPretaB1 from "@/assets/sandalia/8607dc97-43df-4837-9637-d18b0eb38586.png.asset.json";
import imgPretaB2 from "@/assets/sandalia/72cdeeaa-9647-4a83-b303-7145bf66eeb8.png.asset.json";
import imgPretaB3 from "@/assets/sandalia/2d45db41-5854-4c4b-ae3a-ad9c54b28c43.png.asset.json";
import imgPretaB4 from "@/assets/sandalia/67975ae3-fdc0-4d8b-88cf-b4876de11697.png.asset.json";
import imgDourada1 from "@/assets/sandalia/b142f35d-5efb-4708-9826-ede2a8a40387.png.asset.json";
import imgDourada2 from "@/assets/sandalia/58135f13-13ba-4835-ae7e-34bd0fe82be1.png.asset.json";

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

const baseName = "Sandália Birken Papete Feminina Luxo Strass e Pérolas Duas Fivelas Verão 2026";

const make = (
  slug: string,
  cor: string,
  imgs: string[],
): Product => ({
  id: `sandalia-birken-${slug}`,
  name: `${baseName} - ${cor}`,
  image: imgs[0],
  images: imgs,
  price: 89.9,
  originalPrice: 299.9,
  discount: 70,
  description: DESCRIPTION,
  variacoes: SIZES,
  sold: 1248,
});

export const products: Product[] = [
  make("rosa", "Rosa", [imgRosa.url]),
  make("turquesa", "Turquesa", [imgTurquesa.url]),
  make("nude-perolas", "Nude Pérolas", [imgNude1.url, imgNude2.url, imgNude3.url]),
  make("bronze", "Bronze", [imgBronze1.url, imgBronze2.url]),
  make("preta", "Preta", [imgPreta1.url, imgPreta2.url]),
  make("preta-estampa-2", "Preta Estampa Exclusiva", [
    imgPretaB1.url,
    imgPretaB2.url,
    imgPretaB3.url,
    imgPretaB4.url,
  ]),
  make("dourada-flores", "Dourada Flores Pérolas", [imgDourada1.url, imgDourada2.url]),
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Compat: vitrine usa a mesma lista (cada cor já é um produto único).
export const listingProducts: Product[] = products;
