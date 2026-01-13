import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfResttraunts, setlistOfResttraunts] = useState([]);
  const[filteredRestraunts,setfilteredRestraunts] = useState([]);

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6303861&lng=77.0999726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );

    const json = await data.json();

    setlistOfResttraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };


  return listOfResttraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for Cuisines..."
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
        <button
          className="SearchClick"
          onClick={() => {
            console.log(SearchText);
            const filteredRestraunts = listOfResttraunts.filter((res) =>
              res.info.cuisines.join(",").toLowerCase().includes(SearchText.toLowerCase())
            );
            setfilteredRestraunts(filteredRestraunts);
          }}
        >
          Search
        </button>

         

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResttraunts.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfResttraunts(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="rest-container">
        {filteredRestraunts.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} mydata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
