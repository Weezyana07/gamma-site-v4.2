import React from "react";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <h1>Driving Excellence Across Industries</h1>
        <p>
          Empowering businesses with cutting-edge solutions in consultancy, IT,
          construction, manufacturing, and beyond.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Gamma Spectre, our mission is to deliver exceptional solutions,
            services, and products in the fields of consultancy, information
            technology, construction, manufacturing, and general contracting. We
            are committed to enabling progress, improving communities, and
            providing value to our clients through innovative, high-quality, and
            reliable offerings.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision at Gamma Spectre is to be a dynamic and versatile leader
            in the business world, known for our ability to adapt and excel in a
            variety of sectors. We aspire to provide innovative solutions that
            drive economic growth, enhance technological capabilities, and
            foster sustainable development.
          </p>
        </div>
      </section>

      <section className="core-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="icon-placeholder">[Icon]</div>
            <h3>Excellence</h3>
            <p>We continuously strive for excellence in every aspect.</p>
          </div>
          <div className="value-item">
            <div className="icon-placeholder">[Icon]</div>
            <h3>Innovation</h3>
            <p>We actively seek creative solutions and stay ahead of trends.</p>
          </div>
          <div className="value-item">
            <div className="icon-placeholder">[Icon]</div>
            <h3>Integrity</h3>
            <p>We promote transparency, trust, and ethical conduct.</p>
          </div>
          <div className="value-item">
            <div className="icon-placeholder">[Icon]</div>
            <h3>Collaboration</h3>
            <p>We value partnerships with clients and experts.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="image-placeholder">[Photo]</div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="image-placeholder">[Photo]</div>
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <div className="image-placeholder">[Photo]</div>
            <h3>David Lee</h3>
            <p>Technical Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
