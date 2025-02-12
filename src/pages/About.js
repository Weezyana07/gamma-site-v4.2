import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutPage.css";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/src/assets/images/customer1.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/src/assets/images/customer1.jpg" },
  { name: "Mike Johnson", role: "Project Manager", image: "/src/assets/images/customer1.jpg" },
  { name: "Sarah Brown", role: "Lead Developer", image: "/src/assets/images/customer1.jpg" },
];

const AboutPage = () => {
  const teamSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>
        <p>Our company is dedicated to excellence in innovation and service.</p>
      </motion.div>

      {/* Intro Section */}
      <motion.div className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h1>Who We Are</h1>
        <p>We are a team of professionals committed to delivering top-quality services in various industries.</p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div className="mission-vision" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To empower businesses with innovative solutions that drive success.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be the leading provider of digital transformation and business optimization solutions.</p>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div className="core-values" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value">
            <span className="icon-placeholder">🔥</span>
            <h3>Innovation</h3>
            <p>We embrace creativity to drive new solutions.</p>
          </div>
          <div className="value">
            <span className="icon-placeholder">🤝</span>
            <h3>Integrity</h3>
            <p>We maintain transparency and honesty in all operations.</p>
          </div>
          <div className="value">
            <span className="icon-placeholder">🏆</span>
            <h3>Excellence</h3>
            <p>We strive for the highest quality in our work.</p>
          </div>
        </div>
      </motion.div>

      {/* Team Section - Carousel */}
      <motion.div className="team" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <h2>Meet Our Team</h2>
        <Slider {...teamSliderSettings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default AboutPage;
