import { useState, useEffect } from "react";
import User from "./User";
import Shimmer from "./Shimmer";

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [filterListUser, setFilterListUser] = useState([]);

    
    
    async function fetchData () {
        const data = await fetch("https://corsproxy.io/?https://automationexercise.com/api/productsList");
        const json = await data.json();

        setListOfUsers(json.products);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return listOfUsers.length == 0 ? ( 
        <div className="shimmer-card-list">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </div>
     ) :   (
        <div className="container">
            <div className="filters">
                <input type="text" value={filterListUser} onChange={(e) => {
                    setFilterListUser(e.target.value);
                }}/>
                <button onClick={(
                    
                ) => {

                }}>Search</button>
            </div>
            <div className="user-list">
                {listOfUsers.map((user) => {
                    return (
                        <User key={user.id} {...user}/>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList;