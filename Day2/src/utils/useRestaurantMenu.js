import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (brand_id) => {

   const [cousineInfo, setcousineInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [brand_id]);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + brand_id + "/store_id/10263/source_id/13",
    );

    const json = await data.json();

    setcousineInfo(json.data);
  };

  return cousineInfo;
};

export default useRestaurantMenu;
