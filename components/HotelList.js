import Hotel from "./Hotel";
import {useState} from "react";
import { hotelList } from "../config/config";

const HotelList = () => {
    const [listOfHotels, setListOfHotels] = useState(hotelList);

    return (
        <div className="hotels">
            <button onClick={() => {
                setListOfHotels( listOfHotels.filter((data) => data.type === "family" ))
            }}>Click</button>

             {listOfHotels.map((hotel) => (
                <Hotel key={hotel.id} data={hotel} />
             ))}
        </div>
    )
}

export default HotelList;