import React from "react";
import { Link } from "react-router-dom";
import "./AdminProfile.css";
import profileImage from "../../Assets/Images/404.jpg";

const AdminProfile = () => {
  return (
    <div className="AdminProfile">
      <div className="Profile-Container">
        <div className="Profile-Header">
          <img
            src={profileImage}
            alt="Admin Profile"
            className="Profile-Image"
          />
          <h2>Admin Name</h2>
          <p>admin@example.com</p>
        </div>
        <div className="Profile-Details">
          <div className="Detail-Card">
            <h3>Personal Information</h3>
            <p>
              <strong>Full Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> admin@example.com
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
          <div className="Detail-Card">
            <h3>Account Information</h3>
            <p>
              <strong>Role:</strong> Administrator
            </p>
            <p>
              <strong>Join Date:</strong> 01/01/2020
            </p>
          </div>
          <div className="Edit-Btn-Container">
            <Link to="../EditProfile" className="Edit-Btn">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
