import {useState} from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://placehold.co/100x50" />
            </div>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button onClick={() => {
                            setLoginBtn("Logout")
                        }}>{loginBtn}</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default HeaderComponent;