import { CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const { mydata } = props;

  const{cloudinaryImageId,name,cuisines,costForTwo,avgRating} = mydata?.info; 
  

  return (
    <div className="rest-card">
      <img className="res-image" 
      src= {CDN_URL + mydata.info.cloudinaryImageId}
      alt="res-img">
      </img>
      <h3>{name}</h3>
      <div className="info">
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} **</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;