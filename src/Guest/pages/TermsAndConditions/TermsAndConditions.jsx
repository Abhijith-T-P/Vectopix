import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="TermsAndConditions">
      <h1>Terms and Conditions</h1>
      <div className="content">
        <h2>Welcome to Vectopix!</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Vectopix's website.
        </p>
        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By accessing Vectopix's website, you
          agreed to use cookies in agreement with our privacy policy.
        </p>
        <h3>License</h3>
        <p>
          Unless otherwise stated, Vectopix and/or its licensors own the
          intellectual property rights for all material on our website. All
          intellectual property rights are reserved. You may access this from
          Vectopix for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
        <h3>Restrictions</h3>
        <p>
          You are specifically restricted from all of the following:
          <ul>
            <li>Publishing any website material in any other media.</li>
            <li>
              Selling, sublicensing, and/or otherwise commercializing any
              website material.
            </li>
            <li>Publicly performing and/or showing any website material.</li>
            <li>Using this website in any way that is or may be damaging.</li>
            <li>
              Using this website in any way that impacts user access to this
              website.
            </li>
          </ul>
        </p>
        {/* Add more sections as needed */}
        <h3>Contact Us</h3>
        <p>
          If you have any questions about these terms and conditions, please
          contact us.
        </p>
        <p>
          By using our website, you hereby consent to our terms and conditions
          and agree to abide by them.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
