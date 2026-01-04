import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img 
        className="logo" src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0" alt="Logo">
        </img>
      </div>
      <div className="Tag-line">
        <h2>We serve You better !</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard = (props) =>{
  return(
    <div className="rest-card"> 
    <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/ba7c34f8-2dbf-404f-b741-35843bf209b0_857156.jpg" 
    alt="res-img">
    </img>
    <h3>{props.resName}</h3>
    <h4>{props.cusines}</h4>
    <h4>4.4 stars</h4>
    <h4>38 minutes..</h4>
    </div>
  )
}
const Body = () =>{
  return(
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants and food"></input>
      </div>
      <div className="rest-container">
        <RestaurantCard
        resName="Meghana Foods"
        cusines="Biryani,North Indian,Asian"
         
        />
        <RestaurantCard
        resName="KFC"
        cusines="Burgers,fast food"
        />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

