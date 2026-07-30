import { ProductsList } from "../features/product/components/ProductsList";

export default function Products() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Consulta todos nuestros productos</h1>
      <ProductsList />
    </div>
  );
}
