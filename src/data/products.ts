// Catálogo gerado automaticamente
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
  { titulo: "38", imagem: "", tipo: "tamanho" },
  { titulo: "39", imagem: "", tipo: "tamanho" },
  { titulo: "40", imagem: "", tipo: "tamanho" },
  { titulo: "41", imagem: "", tipo: "tamanho" },
  { titulo: "42", imagem: "", tipo: "tamanho" },
  { titulo: "43", imagem: "", tipo: "tamanho" },
];

const DESCRIPTION =
  "Tênis Olympikus desenvolvido para corredores que buscam alto desempenho, conforto e durabilidade. Cabedal em mesh respirável, entressola com tecnologia de amortecimento responsivo e solado de borracha de alta resistência para máxima aderência e estabilidade no asfalto.";

const IMG = (file: string) => `https://abrilchegou.shop/tenis/img/${file}`;

export const products: Product[] = [
  {
    id: "olympikus-corre-supra-2",
    name: "Tênis Olympikus Corre Supra 2",
    image: IMG("g_50_aac1db7134.jpg"),
    images: [IMG("g_50_aac1db7134.jpg")],
    price: 121.97,
    originalPrice: 1299.0,
    discount: 70,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 543,
  },
  {
    id: "olympikus-corre-5",
    name: "Tênis de Corrida Olympikus Corre 5",
    image: IMG("g_337_446755cadc.jpg"),
    images: [IMG("g_337_446755cadc.jpg")],
    price: 91.68,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-grafeno-3",
    name: "Tênis Olympikus Corre Grafeno 3",
    image: IMG("g_47_917b9a33dd.webp"),
    images: [IMG("g_47_917b9a33dd.webp")],
    price: 89.82,
    originalPrice: 799.99,
    discount: 80,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 3521,
  },
  {
    id: "olympikus-corre-trilha-2",
    name: "Tênis Olympikus Corre Trilha 2",
    image: IMG("g_104_73f5b47aae.jpg"),
    images: [IMG("g_104_73f5b47aae.jpg")],
    price: 88.34,
    originalPrice: 599.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 134,
  },
  {
    id: "olympikus-corre-turbo",
    name: "Tênis Olympikus Corre Turbo",
    image: IMG("g_195_fb2bfdf839.jpg"),
    images: [IMG("g_195_fb2bfdf839.jpg")],
    price: 67.39,
    originalPrice: 669.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 7321,
  },
  {
    id: "olympikus-corre-4-v1",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_19_7a1094b9fb.webp"),
    images: [IMG("g_19_7a1094b9fb.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v2",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_20_0cf2dd3373.webp"),
    images: [IMG("g_20_0cf2dd3373.webp")],
    price: 62.21,
    originalPrice: 599.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 528,
  },
  {
    id: "olympikus-corre-4-v3",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_44_cf9e58e5e1.webp"),
    images: [IMG("g_44_cf9e58e5e1.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v4",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_45_9e1270bd9c.webp"),
    images: [IMG("g_45_9e1270bd9c.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v5",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_46_b92f50a4e4.webp"),
    images: [IMG("g_46_b92f50a4e4.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v6",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_193_9be185af36.webp"),
    images: [IMG("g_193_9be185af36.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v7",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_42_2e2bb2c960.webp"),
    images: [IMG("g_42_2e2bb2c960.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v8",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_194_06e55bbd3c.jpg"),
    images: [IMG("g_194_06e55bbd3c.jpg")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
  {
    id: "olympikus-corre-4-v9",
    name: "Tênis Olympikus Corre 4",
    image: IMG("g_196_0f2dd9d6d4.webp"),
    images: [IMG("g_196_0f2dd9d6d4.webp")],
    price: 62.21,
    originalPrice: 569.99,
    discount: 60,
    description: DESCRIPTION,
    variacoes: SIZES,
    sold: 732,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
