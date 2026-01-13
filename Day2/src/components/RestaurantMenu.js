import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const {resInfo,setResInfo} = useState(null);
    
    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=619503&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
         
         setResInfo(json.data);
    };
    
    if (resInfo === null) return <Shimmer />;
    
  return (
    <div className="menu">
      <div className="heading">
        <div className="title">
          <h3>Restaurant Name</h3>
        </div>
        <div className="inside-title">
          <div className="title">
            <h3>Location</h3>
          </div>
          <div className="title">
            <h3>Rating</h3>
          </div>
        </div>
      </div>

      <div className="dishes-slide">
        <div className="cousine-info">
          <h4>Name: </h4>
          <h4>Rating: </h4>
          <p>
            Description
            ....lsbsdbasdbkasjdnjskdnsjdnsakdnskjdbjhvchdcbdjcbdgvdhbjncjkncjnc
          </p>
        </div>
        <div className="cousine-img">image</div>
      </div>
    </div>
  );
};


export default RestaurantMenu;
