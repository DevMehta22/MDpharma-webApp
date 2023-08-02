import React from "react";
import "./Homee.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="cont">
      <div className="container">
        <h1>MD-pharma</h1>
        <p className="sub">Stock Management system</p>
      </div>
      <div className="buttons">
        <p id="id1">Please Select your choice</p>
        <Link className="btn btn-light mx-3" to="/AddStock" role="button">
          AddStock
        </Link>
        <Link className="btn btn-light mx-3" to="/GetStock" role="button">
          PreviewStock
        </Link>
      </div>
    </div>
  );
};

export default Home;
