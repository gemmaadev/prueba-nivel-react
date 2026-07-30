import type { Product } from "../types/product";

export function getById(
  products: Product[],
  id: string | undefined,
): Product | undefined {
  return products.find((product) => product.id === id);
}
