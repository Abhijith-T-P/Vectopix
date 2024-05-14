import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import vpx from "../../../Asset/logo/logo_2018.png";
import { ReactComponent as BellIcon } from "../../Assets/Icons/4092563_bell_mobile ui_notification_icon.svg";
import { ReactComponent as ProfileIcon } from "../../Assets/Icons/profile-circle-svgrepo-com.svg";
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
    <div className="UserTopbar">
      <div className="UserTopbar-Items">
        <div className="UserTopbar-Brand">
          <div className="UserBrand-Logo">
            <Link to="../User">
              <img src={vpx} alt="vectopix logo" />
            </Link>
          </div>
        </div>
        <div className="UserHamburger" onClick={toggleMenu}>
          <span
            className={`UserHamburger-Line ${isMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`UserHamburger-Line ${isMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`UserHamburger-Line ${isMenuOpen ? "open" : ""}`}
          ></span>
        </div>
      </div>
      <div className={`UserTopbar-Nav ${isMenuOpen ? "open" : ""}`}>
        <div className="UserNav path">
          <ul>
            <li>
              <NavLink style={navStyle} to="../User/Dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./Course">
                Course
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./Notification">
                <BellIcon />
              </NavLink>
            </li>
            <li>
              <NavLink style={navStyle} to="./profile">
                <ProfileIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;