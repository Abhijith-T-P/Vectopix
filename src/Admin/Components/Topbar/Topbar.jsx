import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const AdminnavStyle = ({ isActive }) => {
    return {
      color: isActive ? " var(--clr-text)" : "var(--clr-white)",
    };
  };
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>Admin</h1>
      </div>
      <button className="hamburger" onClick={handleMenuToggle}>
        <span className="hamburger-icon">&#9776;</span>
      </button>
      <nav className={`topbar-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="./dashboard" style={AdminnavStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={AdminnavStyle}>
              Log out
            </NavLink>
          </li>
          <li>
            <NavLink to="./UsersList" style={AdminnavStyle}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="./GuestEnquiry" style={AdminnavStyle}>
              Enquiries
            </NavLink>
          </li>
          <li>
            <NavLink to="./CoursesList" style={AdminnavStyle}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="./AdminProfile" style={AdminnavStyle}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
