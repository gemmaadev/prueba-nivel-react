import { useState } from "react";
import { products } from "../../../data/products";
import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router";

export function ProductList() {
  const [productList] = useState<Product[]>(products);

  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={handleCardClick}
        />
      ))}
    </ul>
  );
}
