import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getById } from "../utils/getById";
import { products } from "../../../data/products";

export function useProductDetail(id: string | undefined) {
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProduct = getById(products, id);
      if (foundProduct) {
        setProductDetail(foundProduct);
        setError(null);
      } else {
        setProductDetail(null);
        setError("Producto no encontrado");
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  return { productDetail, loading, error };
}
