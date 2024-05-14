import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Container">
        <div className="Footer-Link">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Terms&Conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        
        <div className="Footer-Copy">
          <span>&copy; Vectopix {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
