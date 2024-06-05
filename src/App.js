import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import { userContext } from "./utils/userContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";

const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const userApi = useContext(userContext);
  const [userData, setUserData] = useState(userApi.isLoggedin);

  return (
    <Provider store={reduxStore}>
      <userContext.Provider value={{ userData, setUserData }}>
        <HeaderComponent />
        <Outlet />
      </userContext.Provider>
    </Provider>
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
          <Suspense fallback={<Skeleton count={5} />}>
            <ProductDetail />
          </Suspense>
        ),
        errorElement: <PageNotFound />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Skeleton count={5} />}>
            <Cart />
          </Suspense>
        ),
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
