import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../Config/Firebase";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        setMobileError(value.length !== 10 || !/^\d+$/.test(value));
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    if (!mobileError && password === confirmPassword) {
      setLoading(true);
      try {
        const userdb = collection(db, "Student_Data");
        await addDoc(userdb, {
          username,
          email,
          mobile,
          password, // Ensure that you hash the password in a real application
        });
        console.log("User registered successfully");

        // Reset form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setMobile("");
        setConfirmPassword("");

        // Redirect to login
        navigate("../Signin");
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        setLoading(false);
      }
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
              value={username}
              onChange={handleChange}
              required
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              value={mobile}
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
              value={password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
            />
            {passwordMatchError && (
              <span className="error-message">Passwords do not match</span>
            )}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
