import { Link, useNavigate, useParams } from "react-router";
import { useProductDetail } from "../features/product/hooks/useProductDetail";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { productDetail, loading, error } = useProductDetail(id);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error || !productDetail) {
    return (
      <div className="flex flex-1 flex-col justify-center text-center items-center gap-3">
        <h1 className="font-bold text-3xl text-red-600">
          Producto no encontrado
        </h1>
        <p className="text-xl text-red-600">
          Lo sentimos, el producto que intentas encontrar no existe o no se
          encuentra disponible en nuestra tienda
        </p>
        <Link
          to={"/products"}
          className="border bg-blue-700 text-white rounded px-4 py-2"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 cursor-pointer text-start"
      >
        ← Volver atrás
      </button>
      <img
        src={productDetail.image.src}
        alt={productDetail.image.alt}
        className="w-full h-40 object-cover"
      />
      <span className="uppercase text-sm text-gray-600">
        {productDetail.category}
      </span>
      <h3 className="text-xl font-bold">{productDetail.title}</h3>
      <p>{productDetail.description}</p>
      <p className="text-xl">{productDetail.price}€</p>
    </div>
  );
}
