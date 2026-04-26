import type { Product } from "@/data/products";

export type CategoryId =
  | "sandalias"
  | "rasteiras"
  | "bolsas"
  | "botas"
  | "mini-melissa"
  | "hello-kitty"
  | "tenis"
  | "salto"
  | "chinelos";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { id: "sandalias", label: "Sandálias", emoji: "👡" },
  { id: "rasteiras", label: "Rasteiras", emoji: "🩴" },
  { id: "bolsas", label: "Bolsas", emoji: "👜" },
  { id: "botas", label: "Botas", emoji: "👢" },
  { id: "tenis", label: "Tênis", emoji: "👟" },
  { id: "salto", label: "Salto", emoji: "👠" },
  { id: "chinelos", label: "Chinelos", emoji: "🩴" },
  { id: "mini-melissa", label: "Mini Melissa", emoji: "👶" },
  { id: "hello-kitty", label: "Hello Kitty", emoji: "🎀" },
];

export function productMatchesCategory(product: Product, category: CategoryId): boolean {
  const name = product.name.toLowerCase();

  switch (category) {
    case "mini-melissa":
      return name.startsWith("mini melissa");
    case "hello-kitty":
      return name.includes("hello kitty");
    case "bolsas":
      return /\b(bag|bolsa|shopper|pochete)\b/.test(name);
    case "botas":
      return /\b(boot|coturno|warm boot|cosmo boot)\b/.test(name);
    case "tenis":
      return /\b(sneaker|x beat|x bend|x rush|x loop|x mood|player)\b/.test(name);
    case "salto":
      return /\b(heel|kitten heel|party heel|pescura)\b/.test(name);
    case "chinelos":
      return /\b(flip flop|thong|slide|slip)\b/.test(name);
    case "rasteiras":
      return /\b(ballerina|ultragirl|flat|soft|ella|becca|royal|nabeela|anastasia)\b/.test(name);
    case "sandalias":
      // Sandálias: tudo que não cai nas outras (catch-all amplo) — incluindo papete, sandal, platform, mule, clog
      return /\b(sandal|papete|platform|mule|clog|sun|free|cozy|possession|m-lover|x icon|stripes|cross|duo|charm|float|pulse|kick off|mar|mare|stellar|street|sun|aranha|campana|golden|perfection|vixen|nina|tina|hoop|link|cargo|dulce|cute|heart|heartbeat|mary|urban|vibe|treasure|refraction|charm)\b/.test(name);
    default:
      return false;
  }
}

export function filterByCategory(products: Product[], category: CategoryId | null): Product[] {
  if (!category) return products;
  return products.filter((p) => productMatchesCategory(p, category));
}
