import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import vpx from "../../../Asset/logo/logo_2018.png";
import "./Topbar.css";

const navStyle = ({ isActive }) => {
  return {
    color: isActive ? "var(--clr-red)" : "var(--clr-text)",
  };
};

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Topbar">
      <div className="Topbar-Items">
        <div className="Topbar-Brand">
          <div className="Brand-Logo">
            <Link to="../Vectopix">
              <img src={vpx} alt="vectopix logo" />
            </Link>
          </div>
        </div>
        <div className="Hamburger" onClick={toggleMenu}>
          <span className={`Hamburger-Line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`Hamburger-Line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`Hamburger-Line ${isMenuOpen ? "open" : ""}`}></span>
        </div>
      </div>
      <div className={`Topbar-Nav ${isMenuOpen ? "open" : ""}`}>
        <div className="Nav path">
          <ul>
            <li>
              <NavLink style={navStyle} to="../">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./Courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Nav Account">
          <ul>
          <NavLink to="../Signin">
            <li>
              <div className="Sign-In Rbtn">
                Sign in
              </div>
            </li>
            </NavLink>
            <NavLink to="../Register">
            <li>
              <div className="Get-Started Rbtn">
                Get started
              </div>
            </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;