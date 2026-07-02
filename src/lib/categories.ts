import type { Product } from "@/data/products";

export type CategoryId = "robos-aspiradores";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export const CATEGORIES: Category[] = [
  { id: "robos-aspiradores", label: "Robôs Aspiradores", emoji: "🤖" },
];

export function productMatchesCategory(_product: Product, category: CategoryId): boolean {
  return category === "robos-aspiradores";
}

export function filterByCategory(products: Product[], category: CategoryId | null): Product[] {
  if (!category) return products;
  return products.filter((p) => productMatchesCategory(p, category));
}
