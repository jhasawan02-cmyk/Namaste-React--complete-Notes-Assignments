import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName , setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="Logo-container">
        <img
          className="logo" src={LOGO_URL} alt="Logo">
        </img>
      </div>
      <div className="Tag-line">
        <h2>We serve You better...</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li onClick={() =>{
            btnName === "Login" ? setbtnName( "Logout"): setbtnName( "Login");
          }}>{btnName}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;
