// Catálogo
import img1 from "@/assets/robo/d0d1a5e8-1e4e-4fd1-a7a6-db8687974aab.png";
import img2 from "@/assets/robo/f4d31a50-d6cb-4429-a04c-07c46ad9f2e4.png";
import img3 from "@/assets/robo/ed78a73a-7631-4837-aafa-0ddbec6ff7b8.png";
import img4 from "@/assets/robo/3ffee8b6-985d-4f56-b61a-1477bd0b547d.png";
import img5 from "@/assets/robo/a1109d89-9a34-4069-97a9-1a1931c0c396.png";
import img6 from "@/assets/robo/d31fb2b3-e2b2-4212-9b85-6f22bf03ab3b.png";
import img7 from "@/assets/robo/508654e2-a322-4a95-9145-3429070a302b.png";
import img8 from "@/assets/robo/be37070e-f0e2-4d26-815a-734a97c606b0.png";
import img9 from "@/assets/robo/4a8aa78b-ff2c-40da-8f57-4770645360f6.png";

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

const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const DESCRIPTION =
  "Robô Aspirador e Mopa Inteligente com sucção potente de 19.000Pa, caixa de poeira autoesvaziável, mopa flexível com lavagem automática a 75°C, mapeamento a laser, controle por aplicativo e voz. Silencioso, seguro para pets e crianças, ideal para pisos, tapetes e todos os cantos da casa. Coleção 2026.";

export const products: Product[] = [
  {
    id: "robo-aspirador-mopa-19000pa",
    name: "Robô Aspirador e Mopa 19.000Pa, Caixa Autoesvaziável, Mopa com Lavagem 75°C, Amigo dos Pets",
    image: IMAGES[0],
    images: IMAGES,
    price: 29.9,
    originalPrice: 299.0,
    discount: 90,
    description: DESCRIPTION,
    variacoes: [
      { titulo: "Preto", imagem: IMAGES[0], tipo: "cor" },
      { titulo: "Branco", imagem: IMAGES[1], tipo: "cor" },
    ],
    sold: 2143,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const listingProducts: Product[] = products;
