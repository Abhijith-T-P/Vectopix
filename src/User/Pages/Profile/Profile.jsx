import React from "react";
import "./Profile.css";
import profileImage from "../../Assets/Images/profile-image.jpg"; // Example profile image
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-Container">
        <div className="Profile-Header">
          <img src={profileImage} alt="Profile" className="Profile-Image" />
          <h2>User Name</h2>
        </div>
        <div className="Profile-Details">
          <div className="Detail-Card">
            <h3>Personal Information</h3>
            <p><strong>Full Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
          <div className="Detail-Card">
            <h3>Course Information</h3>
            <p><strong>Current Course:</strong> Computer Hardware</p>
            <p><strong>Join Date:</strong> 23/4/2025</p>
            <p><strong>Progress:</strong> 70%</p>
          </div>
          <div className="Detail-Card">
            <h3>Settings</h3>
            <div className="Edit-Btn-Container">
          <Link to="../EditProfile" className="Edit-Btn">
            Edit Profile
          </Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
