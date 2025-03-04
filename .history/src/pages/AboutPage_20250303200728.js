import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const aboutSections = [
  {
    title: "Our Mission",
    img: "../assets/images/mission.png",
    desc: "Delivering innovative solutions that empower businesses.",
  },
  {
    title: "Our Vision",
    img: "../assets/images/about.png",
    desc: "To be the leading provider of technology-driven business solutions.",
  },
];

const teamMembers = [
  { name: "Wils", img: "../assets/images/wils.jpg", role: "CEO" },
  { name: "Mfon", img: "../assets/images/mfon2.jpg", role: "CTO" },
  { name: "Ibr", img: "../assets/images/ibr4.jpg", role: "Lead Engineer" },
  { name: "Fahad", img: "../assets/images/fahad.jpg", role: "Project Manager" },
];

const AboutPage = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>About Us - Gamma Spectre Solutions</title>
        <meta
          name="description"
          content="Learn more about Gamma Spectre Solutions and our mission."
        />
      </Helmet>

      <Header />

      {/* About Sections */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Who we are and what drives us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="mx-auto h-40 w-full object-cover rounded-md"
                  loading="lazy"
                />
                <h2 className="text-2xl font-semibold mt-4">{section.title}</h2>
                <p className="text-gray-600 mt-2">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mt-2">
            The people behind our success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto h-32 w-32 object-cover rounded-full"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Suspense
        fallback={<div className="text-center py-10">Loading contact...</div>}
      >
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
};

export default AboutPage;
