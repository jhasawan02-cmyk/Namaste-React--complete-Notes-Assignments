import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./image/logo.avif";
import userIcon from "url:./image/user-icon.png";


const jxsheading = <h1 className="heading">Namaste React with JSX!!</h1>;
const numbber = 1000;

const HeadingComponent = () => (
  <div id="container">
    <h1>{2 + 5}</h1>
    <h1> This is a functional component</h1>
  </div>
);
//Asssignment -working

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" className="pic" />
    <input name="search-bar" type="text" placeholder="Search here"/>
    <button>Search</button>
    <img src={userIcon} alt="user-icon" className="pic"/>
  </div>
)
const AppLayout = () => (
    <>
    <Header />
    <HeadingComponent />
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout /> );

