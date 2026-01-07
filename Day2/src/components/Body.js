import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const [listOfResttraunts,setlistOfResttraunts]= useState(reslist);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..."></input>
        <button className="filter-btn" onClick = {()=>{
          const filteredList = listOfResttraunts.filter(
            (res) => res.info.avgRating > 4.6 
          );
          setlistOfResttraunts (filteredList);
        }}
          >
        Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
          {
            listOfResttraunts.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} mydata={restaurant}/>
            ))
          }  
      </div>
    </div>
  );
};

export default Body;