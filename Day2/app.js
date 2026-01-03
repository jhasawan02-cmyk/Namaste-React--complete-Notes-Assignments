import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const jxsheading = <h1 className="heading">Namaste React with JSX!!</h1>;
const numbber = 1000;

const HeadingComponent = () => (
  <div id="container">
    <h1>{2 + 5}</h1>
    <h1> This is a functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
