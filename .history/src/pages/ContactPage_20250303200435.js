import React, { useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Lazy load Contact component
const Contact = lazy(() => import("../components/Contact"));

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact Us - Gamma Spectre Solutions</title>
        <meta
          name="description"
          content="Get in touch with Gamma Spectre Solutions for business inquiries and support."
        />
        <meta property="og:title" content="Contact Gamma Spectre Solutions" />
        <meta
          property="og:description"
          content="Reach out to us for expert consultancy and IT solutions."
        />
      </Helmet>

      <Header />

      <section className="bg-gray-100 text-center py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-4">
          We'd love to hear from you. Send us a message!
        </p>
      </section>

      {/* Lazy Load Contact Form */}
      <Suspense
        fallback={<div className="text-center py-10">Loading form...</div>}
      >
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {successMessage && (
              <p className="text-green-600 mt-2">{successMessage}</p>
            )}
          </form>
        </div>
      </Suspense>

      <Footer />
    </>
  );
};

export default ContactPage;
