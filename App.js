import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import HotelList from "./components/HotelList";;


const AppLayout = () => {
    return (
        <div className="wrapper">
            <HeaderComponent />
            <HotelList />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)