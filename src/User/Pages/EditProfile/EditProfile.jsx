import React, { useState } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "(123) 456-7890",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="EditProfile">
      <div className="EditProfile-Container">
      <Link to="../Dashboard">
            <button className="Back-Btn">Back to Dashboard</button>
          </Link>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className="EditProfile-Form">
          <div className="Form-Group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Form-Group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Form-Group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Form-Group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="Form-Group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="Form-Actions">
            <button type="submit" className="Save-Btn">
              Save Changes
            </button>
            <button type="button" className="Cancel-Btn" onClick={() => console.log('Cancel Edit')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
