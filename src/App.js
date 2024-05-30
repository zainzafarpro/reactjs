import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
//import ProductDetail from "./components/ProductDetail";

const ProductDetail = lazy(() => import("./components/ProductDetail"));

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/product-detail/:prodID",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <ProductDetail />
          </Suspense>
        ),
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
