import { CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const { mydata } = props;

  const{banner_image_es,brand_name,main_offering,description,slug,avgRating} = mydata; 
  

  return (
    <div className="rest-card">
      <img className="res-image" 
      src= {banner_image_es}
      alt="res-img">
      </img>
      <h3>{brand_name}</h3>
      <div className="info">
        <h4>{main_offering}</h4>
        <h4>{description || slug || "NA"}</h4>
        <h4>{avgRating || "4.2"} **</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;