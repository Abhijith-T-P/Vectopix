import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import img404 from "./Assets/Images/404.jpg"; 

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-Container">
        <div className="NotFound-Image">
          <img src={img404} alt="404" />
        </div>
        <div className="NotFound-Text">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/Admin/Dashboard" className="Home-Btn">
            Go Back Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
