import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
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
          <li className="px-2">Cart</li>
          <li className="px-2">
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
