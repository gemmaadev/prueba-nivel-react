import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router";
import { useProductList } from "../hooks/useProductsList";

export function ProductsList() {
  const navigate = useNavigate();

  const { productList, loading, error } = useProductList();

  const handleCardClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return (
      <p className="text-red-600">
        Ha ocurrido un error y no se han podido cargar los productos
      </p>
    );
  }

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
