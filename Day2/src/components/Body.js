import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfResttraunts, setlistOfResttraunts] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.eatsure.com/v1/api/get_restaurants_with_details?cityId=7322&storeId=10263 ",
    );

    const json = await data.json();
    const Restaurant_data = json?.data?.data || [];

    setlistOfResttraunts(Restaurant_data);
    setfilteredRestraunts(Restaurant_data);
  };

  const Onlinestatus = useOnlinestatus();

  if (Onlinestatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4">
        <h1 className="text-4xl mb-2">📶</h1>
        <h1 className="text-2xl font-bold text-gray-800">Connection Lost</h1>
        <p className="text-gray-500">Please check your internet connection and try again.</p>
      </div>
    );
  }

  return listOfResttraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-orange-400 transition-all outline-none text-gray-700"
              placeholder="Search for restaurants, cuisines..."
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <button
            className="w-full md:w-auto px-10 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-orange-200 active:scale-95"
            onClick={() => {
              const filteredRes = listOfResttraunts.filter((res) =>
                res.brand_name.toLowerCase().includes(SearchText.toLowerCase()),
              );
              setfilteredRestraunts(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredRestraunts.map((res) => (
            <Link
              key={res.brand_id}
              className="no-underline transition-transform duration-300 hover:scale-[1.03]"
              to={"/menu/" + res.brand_id}
            >
              <RestaurantCard mydata={res} />
            </Link>
          ))}
        </div>
        
        {filteredRestraunts.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-xl text-gray-400">No restaurants found matching "{SearchText}"</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;