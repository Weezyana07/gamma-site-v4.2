// src/components/Contact.js
import React from "react";
import "./Contact.css";
import contactImage from "../assets/images/contact.jpg";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div
        className="contact-left"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="contact-right">
        <div className="contact-content">
          <h2>What can we help you overcome?</h2>
          <p>
            Do you need assistance overcoming a technological challenge? Our
            experts are ready to help you find the best solutions.
          </p>
          <a
            href="mailto:info@gammaspectresolutions.com"
            className="contact-button"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
