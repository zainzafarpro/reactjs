import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";
import reduxStore from "../redux/reduxStore";

export const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { userData, setUserData } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center border-black border-2 mx-2 p-2 mb-10">
      <div className="logo">
        <img src="https://placehold.co/100x50" />
      </div>
      <nav className="nav">
        <ul className="flex">
          <li className="px-2">
            <NavLink
              to={"/"}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart: ({cartItems.length})</Link>
          </li>
          <li className="px-2">
            <button
              onClick={() => {
                setUserData("new user");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li>{userData}</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
