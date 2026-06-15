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
import imgTurquesa2 from "@/assets/sandalia/87f998c6-c9c3-44e0-a2cf-fc09a6b12af9.png.asset.json";
import imgRosa2 from "@/assets/sandalia/117c49d2-9610-49d1-a611-cf0eaa0c4ea9.png.asset.json";

// Nova: Birken Glitter Strass com 4 cores
import imgGlitterPreta from "@/assets/sandalia/3d845169-612d-4d6c-a915-3d7c035dfed6.png.asset.json";
import imgGlitterDourada from "@/assets/sandalia/eb309f75-5b19-4ca7-9754-cd78e3e2144e.png.asset.json";
import imgGlitterTurquesa from "@/assets/sandalia/5b58730d-3b1f-457d-bc82-17bf6fd4395b.png.asset.json";
import imgGlitterRosa from "@/assets/sandalia/1264f4bb-32d7-4207-9a37-a0f64d69ee60.png.asset.json";
import imgGlitterLifestyle from "@/assets/sandalia/1d9e5f7c-4001-4bed-946f-b5f5b1c442f0.png.asset.json";
import imgGlitterPretaPe from "@/assets/sandalia/3dfa742d-b7e9-499c-9450-6fa68960fe38.png.asset.json";
import imgGlitterDouradaPe from "@/assets/sandalia/8a8c1654-5c09-446f-8c41-25b8428096d0.png.asset.json";
import imgGlitterTurquesaPe from "@/assets/sandalia/aac0b9af-5a7f-4ccf-9024-441d5851d7fa.png.asset.json";
import imgGlitterRosaPe from "@/assets/sandalia/cfc2f81c-86cf-464c-b79e-bf8b2e1bb50e.png.asset.json";

// Nova: Birken Tribal Pérolas - 3 cores
import imgTribalPrata1 from "@/assets/sandalia/e75a3cc2-c7a3-485a-8f2e-11421a48a240.png.asset.json";
import imgTribalPrata2 from "@/assets/sandalia/0606ad3b-b0d2-4361-af63-1792e371e084.png.asset.json";
import imgTribalPrataPe from "@/assets/sandalia/a4b33746-468b-40ba-a01e-bad44e8c0cbd.png.asset.json";
import imgTribalDourada1 from "@/assets/sandalia/7f8210c8-ef62-4c80-b7a0-b3b9e8e31b06.png.asset.json";
import imgTribalDourada2 from "@/assets/sandalia/a57c4400-ce2e-4e3a-94ea-d6f32243324a.png.asset.json";
import imgTribalDouradaPe from "@/assets/sandalia/a4cf1acd-ad9a-4c30-bd60-6875366abb54.png.asset.json";
import imgTribalPreta1 from "@/assets/sandalia/afc21fa5-71f3-4535-957f-16f2049ff861.png.asset.json";
import imgTribalPreta2 from "@/assets/sandalia/c10aaba8-0b56-47b7-92ff-bde2e277e021.png.asset.json";
import imgTribalPretaPe from "@/assets/sandalia/aa4ebd58-a118-432d-806f-390e0d34b601.png.asset.json";


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
  make("rosa", "Rosa", [imgRosa.url, imgRosa2.url]),
  make("turquesa", "Turquesa", [imgTurquesa.url, imgTurquesa2.url]),
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
  {
    id: "sandalia-birken-glitter-strass",
    name: "Sandália Birken Glitter Strass Brilho Duas Fivelas",
    image: imgGlitterLifestyle.url,
    images: [
      imgGlitterLifestyle.url,
      imgGlitterPreta.url,
      imgGlitterDourada.url,
      imgGlitterTurquesa.url,
      imgGlitterRosa.url,
      imgGlitterPretaPe.url,
      imgGlitterDouradaPe.url,
      imgGlitterTurquesaPe.url,
      imgGlitterRosaPe.url,
    ],
    price: 89.9,
    originalPrice: 299.9,
    discount: 70,
    description: DESCRIPTION,
    variacoes: [
      { titulo: "Preta", imagem: imgGlitterPreta.url, tipo: "cor" },
      { titulo: "Dourada", imagem: imgGlitterDourada.url, tipo: "cor" },
      { titulo: "Turquesa", imagem: imgGlitterTurquesa.url, tipo: "cor" },
      { titulo: "Rosa", imagem: imgGlitterRosa.url, tipo: "cor" },
      ...SIZES,
    ],
    sold: 980,
  },
  {
    id: "sandalia-birken-tribal-perolas",
    name: "Sandália Birken Tribal Pérolas Bordada Duas Fivelas",
    image: imgTribalPrata1.url,
    images: [
      imgTribalPrata1.url,
      imgTribalDourada1.url,
      imgTribalPreta1.url,
      imgTribalPrata2.url,
      imgTribalDourada2.url,
      imgTribalPreta2.url,
      imgTribalPrataPe.url,
      imgTribalDouradaPe.url,
      imgTribalPretaPe.url,
    ],
    price: 89.9,
    originalPrice: 299.9,
    discount: 70,
    description: DESCRIPTION,
    variacoes: [
      { titulo: "Prata Pérolas", imagem: imgTribalPrata1.url, tipo: "cor" },
      { titulo: "Dourada", imagem: imgTribalDourada1.url, tipo: "cor" },
      { titulo: "Preta", imagem: imgTribalPreta1.url, tipo: "cor" },
      ...SIZES,
    ],
    sold: 742,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Compat: vitrine usa a mesma lista (cada cor já é um produto único).
export const listingProducts: Product[] = products;
