import useRestaurantMenu from "../utils/userestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { brand_id } = useParams();
  const cousineInfo = useRestaurantMenu(brand_id);
   const dispatch = useDispatch();

  const brandName = cousineInfo?.brand_details?.brand_name;
  const products = cousineInfo?.collections?.[1]?.products;

 // onClick handler for add button
 const  handleAddItem = (item) => {
    dispatch(addItem(item));
 }

  if (!products) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-gray-50 border-x-4 border-orange-500">
      <header className="mb-8 pb-6 text-center">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight italic uppercase">
          {brandName}
        </h1>

        <div className="flex justify-center">
          <p className="text-gray-500 mt-2 font-bold tracking-widest uppercase text-xs">
            Discover the best dishes from our kitchen
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {products.map((item) => (
          <div
             className="flex flex-col-reverse md:flex-row justify-between items-center bg-white p-6 rounded-2xl border-4 border-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-200 gap-6"
            key={item.product_id}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-black text-gray-800 uppercase italic">
                  {item.product_name}
                </h2>
                {item.rating && (
                  <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded border-2 border-gray-800">
                    ★ {item.rating}
                  </span>
                )}
              </div>

              <p className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-tighter">
                {item.tags && item.tags.length > 0
                  ? item.tags.map((t) => t.name).join(", ")
                  : item.product_name}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none font-medium">
                {item.big_description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-gray-900">
                  ₹{item.price}
                </span>
                <button className="px-8 py-2 border-4 border-gray-800 bg-white text-gray-700 font-black rounded-xl hover:bg-orange-500 hover:text-white transition-all active:scale-95 uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-44 h-44 shrink-0 border-4 border-gray-700 rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
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
