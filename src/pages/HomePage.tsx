import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center items-center gap-3">
      <h1 className="font-bold text-4xl">
        Bienvenido/a a la tienda tech online!
      </h1>
      <p className="text-xl">
        Descubre todos nuestros productos de última generación
      </p>
      <Link
        to={"/products"}
        className="border text-xl bg-blue-700 text-white rounded px-4 py-2"
      >
        Ir a la tienda
      </Link>
    </div>
  );
}
