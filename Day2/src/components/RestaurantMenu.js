import useRestaurantMenu from "../utils/userestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom"; 

const RestaurantMenu = () => {
  const { brand_id } = useParams();
  const cousineInfo = useRestaurantMenu(brand_id);

  const brandName = cousineInfo?.brand_details?.brand_name;
  const products = cousineInfo?.collections?.[1]?.products;

  if (!products) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-gray-50">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          {brandName}
        </h1>
        <p className="text-gray-500 mt-1">Discover the best dishes from our kitchen</p>
      </header>

      <div className="flex flex-col gap-6">
        {products?.map((item) => (
          <div 
            className="flex flex-col-reverse md:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 gap-6" 
            key={item.product_id}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.product_name}
                </h2>
                {item.rating && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    ★ {item.rating}
                  </span>
                )}
              </div>

              <p className="text-sm font-medium text-orange-600 mb-2">
                {item.tags && item.tags.length > 0
                  ? item.tags.map((t) => t.name).join(", ")
                  : item.product_name}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                {item.big_description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <button className="px-8 py-2 border border-gray-200 text-green-600 font-bold rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all active:scale-95 uppercase text-sm">
                  Add
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-44 h-44 shrink-0">
              <img 
                className="w-full h-full object-cover rounded-xl shadow-inner border border-gray-50"
                src={item.product_imageUrl} 
                alt={item.product_name} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;