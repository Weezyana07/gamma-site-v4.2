import React from "react";
import "./Contact.css";
import contactImage from "../assets/images/contact.jpg";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Image */}
        <div
          className="h-64 md:h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${contactImage})` }}
          aria-label="Contact Us Image"
        ></div>

        {/* Contact Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            How Can We Help You Succeed?
          </h2>
          <p className="text-lg text-gray-700 mt-4">
          Whatever challenges you're facing, we're here to provide expert
            solutions that drive results. Let’s turn obstacles into
            opportunities together.
          </p>

          <div className="mt-6">
          <a
            href="mailto:info@gammaspectre.com.ng"
            className="contact-button"
            aria-label="Send an email to Gamma Spectre Solutions"
          >
            Contact Us Today
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
