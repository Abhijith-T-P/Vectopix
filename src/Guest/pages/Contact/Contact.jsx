import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-Heading">
        <h1>Contact us</h1>
      </div>
      <div className="Contact-message"></div>
      <div className="Contact-Container">
        <div className="Contact-Form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone number" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div className="Form-Btn">
            <button type="submit">Send message</button>
          </div>
        </div>
        <div className="Contact-Detail">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <Link to="mailto:Vectopix@gmail.com?subject=Contact&body=Hi%20there,">
                Vectopix@gmail.com
              </Link>
            </li>
            <li>
              <Link to="tel:+1234567890,123">+91 123456789</Link>
            </li>
            <li>
              <Link to="">
                123 Main Street, <br />
                Cityville, <br />
                State, <br />
                Country
              </Link>
            </li>
            <li>
              <div className="Contact-Map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0724447584753!2d76.21001637510375!3d11.618185443103618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f015e487239%3A0xa116715b8e3e6b8c!2sVectopix!5e0!3m2!1sen!2sin!4v1715537307025!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vectopix Location"
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
