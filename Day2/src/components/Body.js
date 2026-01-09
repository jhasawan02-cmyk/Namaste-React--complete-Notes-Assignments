import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => {
  const [listOfResttraunts,setlistOfResttraunts]= useState([]);
  const [SearchText,setSearchText]= useState("");

  useEffect(() => {
    FetchData();
  },[]);

  const FetchData = async () =>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(json);
    setlistOfResttraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

 


  return listOfResttraunts.length === 0?( <Shimmer/>): (
    <div className="body">
      <div className="search">

        <input type="text"  placeholder="Search for restaurants..." value = {SearchText} 
        onChange={(e)=>{setSearchText(e.target.value); }} />

        <button className="SearchClick" onClick={() =>{
          console.log(SearchText)
        }}>Search</button>

        <button className="filter-btn" onClick = {()=>{
          const filteredList = listOfResttraunts.filter(
            (res) => res.info.avgRating > 4.5
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