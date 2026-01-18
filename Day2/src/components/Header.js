import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const Onlinestatus = useOnlinestatus();

  return (
    <div className="bg-amber-50 h-auto border flex  " >
      <div className="border-2">
        <img className="" src={LOGO_URL} alt="Logo"></img>
      </div>

      <div className="border-2  flex  ml-5 ">
        <h2 className="">We Serves You Better...</h2>
      
      <div >
        <ul className=" ">
          <li>
            <Link to="/" className="header_link">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="header_link">Contact Us</Link>
          </li>
          <li>
            <Link to="/about" className="header_link">About Us</Link>
          </li>
          <li>Cart</li>

          <li
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </li>
          <li>
            Network: {Onlinestatus ? "👍" : "❌"}
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};
export default Header;
