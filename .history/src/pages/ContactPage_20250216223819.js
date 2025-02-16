import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./ContactPage.css"; // Create this file for styling

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qjkbfll", // Replace with your EmailJS Service ID
        "template_9dz6u48", // Replace with your EmailJS Template ID
        form.current,
        "iGx17YZJvrY9aaECQ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.log("Failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-top-image"></div>
        <div className="contact-mid-text">
          <p>
            You can contact <span>GAMMA SPECTRE</span>, we're here to answer any
            questions you may have about our services, discuss potential
            collaborations, or provide assistance with any inquiries. Feel free
            to reach out to us using the contact information provided below
          </p>
        </div>
        <div className="contact-bottom-image"></div>
        <Header />
        <div className="contact-welcome">
          <h1 className="contact-title">Reach Out and Connect:</h1>
          <h2 className="contact-subtitle">Let's Start a Conversation! </h2>
        </div>
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
      <div className="contact">
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
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 15 Bujumbura St, Wuse 2, Abuja 904101, FCT
          </p>
          <p>
            <strong>Phone:</strong> +234 000 000 0000
          </p>
          <p>
            <strong>Email:</strong> info@gammaspectre.com.ng
          </p>
          <p>
            <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          </p>
          {/* Social Media Links */}
          <div className="">
            <h2>Connect With Us</h2>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
