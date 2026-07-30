import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex border border-b border-gray-200 px-6 py-5">
        <nav className="flex gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-700" : "hover:text-blue-400"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-700" : "hover:text-blue-500"
            }
          >
            Productos
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-1 flex-col max-w-4xl w-full mx-auto px-6 py-9">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 text-center text-gray-600 p-6">
        Copyright 2026 - Todos los derechos reservados
      </footer>
    </div>
  );
}
