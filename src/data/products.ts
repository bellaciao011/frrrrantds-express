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
}

const SIZES: ProductVariation[] = [
  { titulo: "P", imagem: "", tipo: "tamanho" },
  { titulo: "M", imagem: "", tipo: "tamanho" },
  { titulo: "G", imagem: "", tipo: "tamanho" },
  { titulo: "GG", imagem: "", tipo: "tamanho" },
  { titulo: "XG", imagem: "", tipo: "tamanho" },
];

const DESCRIPTION =
  "As oversized são a escolha perfeita para quem busca conforto e estilo. Com gramatura de 190g, oferecem maciez e durabilidade, sendo ideais para o uso diário. Feitas com 96% algodão e 4% elastano, as camisas garantem um toque suave na pele, um caimento impecável e não encolhem após a lavagem. O elastano proporciona flexibilidade e mantém o ajuste perfeito.";

export const products: Product[] = [
  {
    id: "freaky-season-get-freaky",
    name: "Freaky Season - Get Freaky",
    image: "https://berzerk.com.br/cdn/shop/files/612e3310-33f3-4828-9288-77ea261c80a4.jpg?v=1773257827&width=788",
    images: [
      "https://berzerk.com.br/cdn/shop/files/612e3310-33f3-4828-9288-77ea261c80a4.jpg?v=1773257827&width=1080",
      "https://berzerk.com.br/cdn/shop/files/fit2.jpg?v=1772997109&width=1080",
    ],
    price: 44.98,
    originalPrice: 179.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
  {
    id: "freaky-season-thunder",
    name: "Freaky Season - Thunder",
    image: "https://berzerk.com.br/cdn/shop/files/WhatsAppImage2026-03-11at16.48.50.jpg?v=1773258607&width=788",
    images: [
      "https://berzerk.com.br/cdn/shop/files/WhatsAppImage2026-03-11at16.48.50.jpg?v=1773258607&width=1080",
      "https://berzerk.com.br/cdn/shop/files/freaky2.jpg?v=1772997072&width=1080",
    ],
    price: 44.98,
    originalPrice: 179.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
  {
    id: "freaky-season-wake-wake",
    name: "Freaky Season - Wake Wake",
    image: "https://berzerk.com.br/cdn/shop/files/WhatsAppImage2026-03-11at16.41.48.jpg?v=1773258148&width=788",
    images: [
      "https://berzerk.com.br/cdn/shop/files/WhatsAppImage2026-03-11at16.41.48.jpg?v=1773258148&width=1080",
      "https://berzerk.com.br/cdn/shop/files/wake2.jpg?v=1772997051&width=1080",
    ],
    price: 44.98,
    originalPrice: 179.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
  {
    id: "freaky-season-wake-wake-branco",
    name: "Freaky Season - Wake Wake Branco",
    image: "https://berzerk.com.br/cdn/shop/files/1779193281407-ucthd2.jpg?v=1779193287&width=1293",
    images: [
      "https://berzerk.com.br/cdn/shop/files/1779193281407-ucthd2.jpg?v=1779193287&width=1293",
    ],
    price: 44.98,
    originalPrice: 179.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
  {
    id: "freaky-season-pre-pre",
    name: "Oversized - Freaky Season Pré Pré",
    image: "https://berserkenbrasil.shop/cdn/shop/files/PreCOSTASNOVA.png?v=1771873524&width=1080",
    images: [
      "https://berserkenbrasil.shop/cdn/shop/files/PreCOSTASNOVA.png?v=1771873524&width=1080",
      "https://berserkenbrasil.shop/cdn/shop/files/Freakyverde.png?v=1771873524&width=1080",
    ],
    price: 29.98,
    originalPrice: 119.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
  {
    id: "ganley-bebezinho-eterno",
    name: "Oversized - Ganley Bebezinho Eterno",
    image: "/products/ganley-bebezinho-1.png",
    images: [
      "/products/ganley-bebezinho-1.png",
      "/products/ganley-bebezinho-2.png",
    ],
    price: 44.98,
    originalPrice: 179.9,
    discount: 75,
    description: DESCRIPTION,
    variacoes: SIZES,
  },
];



export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
