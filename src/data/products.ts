// Catálogo
import img1 from "@/assets/triciclo/triciclo-1.png.asset.json";
import img2 from "@/assets/triciclo/triciclo-2.png.asset.json";
import img3 from "@/assets/triciclo/triciclo-3.png.asset.json";

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

const IMAGES = [img1.url, img2.url, img3.url];

const DESCRIPTION =
  "Triciclo elétrico adulto T3 com excelente estabilidade e conforto. Ideal para mobilidade urbana, conta com freio hidráulico, amortecedor reforçado, antena potente e amplo espaço para transportes generosos.\n\nMobilidade urbana segura e estável: três rodas com pneus sem câmara garantem mais equilíbrio e confiança para o dia a dia, ideal para iniciantes e idosos.\n\nBateria removível e recarga fácil: bateria de lítio 60V 20Ah pode ser retirada para recarregar em casa ou no trabalho, sem complicações.\n\nConforto em ruas irregulares graças ao amortecedor reforçado.\n\nLEGISLAÇÃO SOBRE O PRODUTO:\n• Produto autopropelido, sem necessidade de CNH;\n• Sem exigência de homologação ou emplacamento;\n• Recomendação: Resolução 996/23 do CONTRAN;\n• Respeite as normas de trânsito (use capacete, limite de velocidade e legislação vigente).";

export const products: Product[] = [
  {
    id: "triciclo-eletrico-t3",
    name: "T3 Triciclo Elétrico Para Mobilidade Urbana — Bateria 60V 20Ah, Freio Hidráulico, Sem CNH",
    image: IMAGES[0],
    images: IMAGES,
    price: 49.9,
    originalPrice: 499.0,
    discount: 90,
    description: DESCRIPTION,
    variacoes: [
      { titulo: "Branco", imagem: IMAGES[0], tipo: "cor" },
    ],
    sold: 2143,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const listingProducts: Product[] = products;
