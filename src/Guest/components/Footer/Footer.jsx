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
            <Link>About</Link>
            </li><li>
            <Link>Cources</Link>
            </li><li>
            <Link>Contact</Link>
            </li><li>
            <Link>Terms&Condition</Link>
            </li>
          </ul>
        </div>
        
        <div className="Footer-Copy">
          <span>&copy;Vectopix 2024</span></div>
      </div>
    </div>
  );
};

export default Footer;
