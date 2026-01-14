import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom"; 

const RestaurantMenu = () => {
  const [cousineInfo, setcousineInfo] = useState(null);

  const { brand_id } = useParams();
 

  useEffect(() => {
    fetchMenu();
  }, [brand_id]);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API+brand_id+"/store_id/10263/source_id/13");

    const json = await data.json();
    

    setcousineInfo(json.data);
  };

  const brandName = cousineInfo?.brand_details?.brand_name;
  const products = cousineInfo?.collections?.[1]?.products;

  if (!products) return <Shimmer />;



  return (
    <div className="menu">
      <div className="dishes-slide">
        {products?.map((item) => (
          <div className="dish" key={item.product_id}>
            <div className="cousine-info">
              <h1>{item.product_name}</h1>

              <h2>
                {item.tags && item.tags.length > 0
                  ? item.tags.map((t) => t.name).join(", ")
                  : item.product_name}
              </h2>
              <h3>Rs.{item.price}</h3>
              <h4>{item.rating} **</h4>
              <p>{item.big_description}</p>
            </div>

            <div className="cousine-img">
              <img src={item.product_imageUrl} alt={item.product_name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
