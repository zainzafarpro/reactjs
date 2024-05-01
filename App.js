import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img width="100" src="https://zain-me.web.app/images/mypic.jpg" />
            </div>
            <nav className="nav">
                <ul>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                    <li>List 4</li>
                </ul>
            </nav>
        </div>
    )
};

const hotelList = [
    {
        id: "123",
        name: "name 1",
        description: "desp 1",
        location: "locate 1"
    },
    {
        id: "125",
        name: "name 2",
        description: "desp 2",
        location: "locate 2"
    },
    {
        id: "124",
        name: "name 3",
        description: "desp 3",
        location: "locate 3"
    }
]

const Hotel = (props) => {
    const {data} = props;
    const {
        name,
        description,
        location
    } = data;

    return (
        <div className="hotel">
            <strong className="name">{name}</strong>
            <p className="description">{description}</p>
            <span className="location">{location}</span>
        </div>
    )
}

const HotelList = () => {
    return (
        <div className="hotels">
             {hotelList.map(function (hotel, index) {
                return (
                    <Hotel key={index} data={hotel}/>
                )
             })}
        </div>
    )
}

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