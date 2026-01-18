import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const Onlinestatus = useOnlinestatus();

  return (
    <div className="flex justify-between items-center px-8 py-2 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <img className="w-20 hover:scale-105 transition-transform duration-200" src={LOGO_URL} alt="Logo" />
        <h2 className="ml-6 italic text-gray-500 font-medium hidden md:block">
          We Serves You Better...
        </h2>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center gap-8 font-semibold text-gray-700">
          <li className="flex items-center gap-1 text-sm">
            {Onlinestatus ? (
              <span className="flex items-center gap-1 text-green-600"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online</span>
            ) : (
              <span className="flex items-center gap-1 text-red-600"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Offline</span>
            )}
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/" className="no-underline">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/about" className="no-underline">About Us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            <Link to="/contact" className="no-underline">Contact Us</Link>
          </li>
          <li className="relative hover:text-orange-500 transition-colors duration-200 cursor-pointer">
            Cart
          </li>
          <li>
            <button
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-sm active:transform active:scale-95"
              onClick={() => {
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;