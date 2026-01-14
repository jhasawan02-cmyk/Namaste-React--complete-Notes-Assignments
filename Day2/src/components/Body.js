import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfResttraunts, setlistOfResttraunts] = useState([]);
  const[filteredRestraunts,setfilteredRestraunts] = useState([]);

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.eatsure.com/v1/api/get_restaurants_with_details?cityId=7322&storeId=10263 "
    );

    const json = await data.json();
    const Restaurant_data = json?.data?.data || [];

    setlistOfResttraunts(Restaurant_data);

    setfilteredRestraunts(Restaurant_data);

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
              res.brand_name.toLowerCase().includes(SearchText.toLowerCase())
            );
            setfilteredRestraunts(filteredRestraunts);
          }}
        >
          Search
        </button>
 
         {/* did not have the rating data in API so no filter option */}

        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResttraunts.filter(
              (res) => res.data.data.brand_name > 20
            );
            setlistOfResttraunts(filteredList);
          }}
        >
          Filter
        </button> */}
      </div>
      <div className="rest-container">
        {filteredRestraunts.map((res) => (
          <Link 
          key={res.brand_id} 
          className="tex-link" 
          to={"/menu/" + res.brand_id}>
          <RestaurantCard  mydata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

