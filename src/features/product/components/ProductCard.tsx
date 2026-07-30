import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <li
      className="flex flex-col boder shadow-sm border-gray-200 p-6 rounded gap-2"
      onClick={() => onClick(product.id)}
    >
      <img
        src={product.image.src}
        alt={product.image.alt}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-xl font-bold">{product.title}</h3>
      <p className="text-xl">{product.price}€</p>
    </li>
  );
}
