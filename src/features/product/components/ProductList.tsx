import { useState } from "react";
import { products } from "../../../data/products";
import type { Product } from "../types/product";

export function ProductList() {
  const [productList] = useState<Product[]>(products);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {productList.map((product) => (
        <li className="flex flex-col boder shadow-sm border-gray-200 p-6 rounded gap-2">
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="text-xl">{product.price}€</p>
        </li>
      ))}
    </ul>
  );
}
