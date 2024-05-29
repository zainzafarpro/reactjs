import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import UserList from "./components/UserList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import About1 from "./components/About1";
import PageNotFound from "./components/PageNotFound";

// const AppLayout = () => {
//     return (
//         <div className="wrapper">
//             <HeaderComponent />
//             <About />
//             <About1 />
//         </div>
//     )
// };

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  render() {
    console.log("parent render called");
    return <About></About>;
  }

  componentDidMount() {
    console.log("parent did mount called");
  }
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <UserList />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/about/:pageId",
        element: <About />,
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<RouterProvider router={routes}/>)
root.render(<AppLayout />);
