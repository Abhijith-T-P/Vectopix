import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-Heading">
        <h1>Contact us</h1>
      </div>
      <div className="Contact-message">
        <p>Don't hesitate to reach out to us. Our team is dedicated to providing prompt and helpful assistance to all inquiries. Your feedback and questions are invaluable to us as we strive to continuously improve our services.</p>
      </div>
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
              <Link
                to="mailto:Vectopixabl@gmail.com?subject=Contact&body=Hi%20there,"
                target="_blank"
              >
                Vectopixabl@gmail.com
              </Link>
            </li>
            <li>
              <Link to="tel:+91 9447539122 ">+91 123456789</Link>
            </li>{" "}
            <li>
              <Link to="https://wa.me/9562538473 " target="_blank">
                Whatsapp
              </Link>
            </li>
            <li>
              
                Vectopix, <br />
                2nd Floor,Devadas Building <br />
                Near Bus Satand, <br />
                Amblavayal,<br/>
                Wayanad,
                Kerala.<br/>
                Pin-673593
              
            </li>
            <li>
              <div className="Contact-Map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0724447584753!2d76.21001637510375!3d11.618185443103618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f015e487239%3A0xa116715b8e3e6b8c!2sVectopix!5e0!3m2!1sen!2sin!4v1715537307025!5m2!1sen!2sin"
                  width="600"
                  height="300"
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
