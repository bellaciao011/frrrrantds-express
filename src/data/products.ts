// Catálogo gerado automaticamente
import imgBranca1 from "@/assets/sandalia/2be3cda8-e7c6-40cc-9cc3-653e1fff4773.png.asset.json";
import imgBranca2 from "@/assets/sandalia/21944a7c-3c2f-497d-ad30-ec50b6d5e83f.png.asset.json";
import imgBranca3 from "@/assets/sandalia/c0b1fa64-5fc1-46ee-8765-bfa1e7ad1d54.png.asset.json";
import imgNude1 from "@/assets/sandalia/d20e367d-a7a6-49a2-ba37-36dd72cdb92f.png.asset.json";
import imgNude2 from "@/assets/sandalia/be776e27-f32e-4b9b-a281-b34bf73509c7.png.asset.json";
import imgNude3 from "@/assets/sandalia/c247a960-8aa0-40c0-8e0a-876f90815eed.png.asset.json";
import imgPreta1 from "@/assets/sandalia/1be4610b-b56b-41a1-ab09-c3fd50fbd953.png.asset.json";
import imgPreta2 from "@/assets/sandalia/44dc05e8-7433-4d18-9b33-212477bcd541.png.asset.json";
import imgPreta3 from "@/assets/sandalia/95309f36-8a66-43e2-b264-9a77cea99b30.png.asset.json";

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
  cor("Branca", imgBranca1.url),
  cor("Nude", imgNude1.url),
  cor("Preta", imgPreta1.url),
];

const GALERIA: string[] = [
  imgBranca1.url, imgBranca2.url, imgBranca3.url,
  imgNude1.url, imgNude2.url, imgNude3.url,
  imgPreta1.url, imgPreta2.url, imgPreta3.url,
];

export const products: Product[] = [
  {
    id: "sandalia-birken-strass-perolas",
    name: "Sandália Birken Papete Feminina Luxo Strass e Pérolas Duas Fivelas Verão 2026",
    image: imgBranca1.url,
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
