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
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Placeholder+St,+Lagos,+Nigeria"
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
