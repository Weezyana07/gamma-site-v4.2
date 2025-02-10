import React from "react";
import "./ContactPage.css"; // Create this file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Info Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 123 Placeholder St, Lagos, Nigeria
        </p>
        <p>
          <strong>Phone:</strong> +234 800 123 4567
        </p>
        <p>
          <strong>Email:</strong> info@gammaspectre.com
        </p>
        <p>
          <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number (Optional)" />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.865564644197!2d7.4597847736736975!3d9.076009788254057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae720cfa3f3%3A0x40f56124776d10ef!2s15%20Bujumbura%20St%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1739209899982!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* Social Media Links */}
      <div className="social-media">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
