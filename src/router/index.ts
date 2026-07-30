import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "/products", Component: Products },
      { path: "/products/:id", Component: ProductDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
