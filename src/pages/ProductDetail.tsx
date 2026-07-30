import { Link, useNavigate, useParams } from "react-router";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const foundProduct = products.find((product) => product.id === id);

  if (!foundProduct) {
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
        src={foundProduct.image.src}
        alt={foundProduct.image.alt}
        className="w-full h-40 object-cover"
      />
      <span className="uppercase text-sm text-gray-600">
        {foundProduct.category}
      </span>
      <h3 className="text-xl font-bold">{foundProduct.title}</h3>
      <p>{foundProduct.description}</p>
      <p className="text-xl">{foundProduct.price}€</p>
    </div>
  );
}
