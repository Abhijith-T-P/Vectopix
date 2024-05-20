import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Container">
       
        
        <div className="Footer-Copy">
          <span>&copy; Vectopix {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
