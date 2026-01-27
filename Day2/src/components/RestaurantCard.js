import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { mydata } = props;

  
  const {
    banner_image_es,
    brand_name,
    main_offering,
    description,
    slug,
    avgRating,
  } = mydata;

  return (
    <div className="m-4 w-64 bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group border border-transparent hover:border-gray-100">
      <div className="relative h-44 w-full overflow-hidden border">
        <img
          className="w-full h-full object-cover"
          src={banner_image_es}
          alt="res-img"
        />
        <div className="absolute inset-0 bg-linear-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-bold tracking-wider">VIEW MENU</span>
        </div>
      </div>

      <div className="p-4 border">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-extrabold text-gray-800 text-lg leading-tight line-clamp-1">
            {brand_name}
          </h3>
          <div className="flex items-center gap-1 bg-green-100 px-1.5 py-0.5 rounded text-green-700">
            <span className="text-xs font-bold">{avgRating || "4.2"}</span>
            <span className="text-[10px]">★</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm font-medium mt-1 line-clamp-1">
          {main_offering}
        </p>
        
        <p className="text-gray-400 text-xs mt-2 line-clamp-2 min-h-8 leading-relaxed">
          {description || slug || "NA"}
        </p>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Time</span>
            <span className="text-xs font-bold text-gray-700">30-40 MINS</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Offer</span>
            <span className="text-xs font-bold text-orange-500 italic">FREE DELIV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;