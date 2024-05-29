import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { ReactComponent as NotFoundImage } from "./Asset/Images/404.svg"; // Adjust the path to your SVG file

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-Container">
        <div className="NotFound-Image">
          <NotFoundImage />
        </div>
        <div className="NotFound-Text">
          <h1>Oops!</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="Home-Btn">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
