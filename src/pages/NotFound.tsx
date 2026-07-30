import { Link } from "react-router";
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center items-center gap-3">
      <h1 className="font-bold text-4xl">Error 404 - Página no encontrada</h1>
      <p className="text-xl">
        Lo sentimos, la página a la que intentas acceder no existe o no se
        encuentra disponible
      </p>
      <Link
        to={"/products"}
        className="border text-xl bg-blue-700 text-white rounded px-4 py-2"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}
