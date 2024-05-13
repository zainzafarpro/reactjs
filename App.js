import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import UserList from "./components/UserList";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";


const AppLayout = () => {
    return (
        <div className="wrapper">
            <HeaderComponent />
            <UserList />
            <About name={"check"} />
        </div>
    )
};

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageNotFound />
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <PageNotFound />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}/>)