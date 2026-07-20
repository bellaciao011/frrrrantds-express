import type { Product } from "@/data/products";

export type CategoryId = "triciclos-eletricos";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { id: "triciclos-eletricos", label: "Triciclos Elétricos", emoji: "🛺" },
];

export function productMatchesCategory(_product: Product, category: CategoryId): boolean {
  return category === "triciclos-eletricos";
}

export function filterByCategory(products: Product[], category: CategoryId | null): Product[] {
  if (!category) return products;
  return products.filter((p) => productMatchesCategory(p, category));
}
