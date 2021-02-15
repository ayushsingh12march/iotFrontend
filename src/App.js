import React from "react";
import { render } from "react-dom";
import Navbar from "./components/navbar/Navbar"
import Data from "./components/data/Data"
import index from "../web/index.html"
import {Link} from "@reach/router"

const App = () => {
  return (
    <div>
      <Navbar />
      <Data />
      <Link to={index}>Payment</Link>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
