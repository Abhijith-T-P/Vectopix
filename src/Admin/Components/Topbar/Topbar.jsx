// Topbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>Admin </h1>
      </div>
      <nav className="topbar-nav">
        <ul>
          <li>
            <Link to="./dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="./UsersList">Users</Link>
          </li>
          <li>
            <Link to="./CoursesList">Cources</Link>
          </li>
        
          <li>
            <Link to="./settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
