import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import UserList from "./components/UserList";


const AppLayout = () => {
    return (
        <div className="wrapper">
            <HeaderComponent />
            <UserList />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)