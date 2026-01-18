import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfResttraunts, setlistOfResttraunts] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => { FetchData(); }, []);

  const FetchData = async () => {
    const data = await fetch("https://corsproxy.io/https://www.eatsure.com/v1/api/get_restaurants_with_details?cityId=7322&storeId=10263");
    const json = await data.json();
    const Restaurant_data = json?.data?.data || [];
    setlistOfResttraunts(Restaurant_data);
    setfilteredRestraunts(Restaurant_data);
  };

  const Onlinestatus = useOnlinestatus();

  if (Onlinestatus === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] border-4 border-gray-800 m-10 p-10 bg-red-50 rounded-3xl">
        <h1 className="text-4xl font-black">CONNECTION LOST</h1>
      </div>
    );
  }

  return listOfResttraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Reduced Border for Search Component */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10  p-4 ">
          <input
            type="text"
            className="w-full md:w-1/3 px-4 py-2 rounded-xl border-2  focus:bg-orange-50 transition-all outline-none font-bold"
            placeholder="Search food..."
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-8 py-2 border-2 border-orange-500 rounded-xl text-black font-black rounded-xl hover:bg-orange-200 transition-all active:scale-95"
            onClick={() => {
              const filtered = listOfResttraunts.filter((res) =>
                res.brand_name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setfilteredRestraunts(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestraunts.map((res) => (
            <Link key={res.brand_id} to={"/menu/" + res.brand_id}>
              <RestaurantCard mydata={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;