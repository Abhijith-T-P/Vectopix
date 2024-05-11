import React from "react";
import { Link, NavLink } from "react-router-dom";
import vpx from "../../../Asset/logo/logo_2018.png";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="Topbar-Items">
        <div className="Topbar-Brand">
          <div className="Brand-Logo">
            <Link to="./">
              <img src={vpx} alt="vectopix logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="Topbar-Nav">
        <div className="Nav path">
          <ul>
            <li>
              <NavLink to="../">Home</NavLink>
            </li>
            <li>
              <NavLink to="./About">About</NavLink>
            </li>
            <li>
              <NavLink to="./Courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="./Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="Nav Account">
          <ul>
            <li>
              <div className="Sign-In">
                <NavLink to="../">Sign in</NavLink>
              </div>
            </li>
            <li>
              <div className="Get-Started">
                <NavLink to="../">Get started</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
