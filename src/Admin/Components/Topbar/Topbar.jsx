import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>Admin</h1>
      </div>
      <button className="hamburger" onClick={handleMenuToggle}>
        <span className="hamburger-icon">&#9776;</span>
      </button>
      <nav className={`topbar-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="./dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="./UsersList">Users</Link>
          </li>
          <li>
            <Link to="./CoursesList">Courses</Link>
          </li>
          <li>
            <Link to="./AdminProfile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
