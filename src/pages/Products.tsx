import { ProductList } from "../features/product/components/ProductList";

export default function Products() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Consulta todos nuestros productos</h1>
      <ProductList />
    </div>
  );
}
