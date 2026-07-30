import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { products } from "../../../data/products";

export function useProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProductList(products);
      setLoading(false);
      setError(null);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { productList, loading, error };
}
