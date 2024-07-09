import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "mobile") {
      const mobile = e.target.value;
      setMobileError(mobile.length !== 10 || !/^\d+$/.test(mobile));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }

    if (!mobileError && formData.password === formData.confirmPassword) {
      console.log("Username:", formData.username);
      console.log("Email:", formData.email);
      console.log("Mobile:", formData.mobile);
      console.log("Password:", formData.password);
      // Further code to handle form submission, e.g., sending data to backend
    }
  };

  return (
    <div className="Register">
      <div className="Register-Container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="0123456789"
            />
            {mobileError && (
              <span className="error-message"> must be exactly 10 digits</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
            />
            {passwordMatchError && (
              <span className="error-message">Passwords do not match</span>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
