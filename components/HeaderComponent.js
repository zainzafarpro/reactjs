import {useState} from "react";
import { Link, NavLink } from "react-router-dom";

export const HeaderComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://placehold.co/100x50" />
            </div>
            <nav className="nav">
                <ul>
                    <li><NavLink to={'/'} className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }>Home</NavLink></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button onClick={() => {
                            loginBtn === 'Login' ? setLoginBtn("Logout"): setLoginBtn("Login")
                        }}>{loginBtn}</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default HeaderComponent;