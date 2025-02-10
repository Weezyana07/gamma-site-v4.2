import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Introductory Statement */}
      <section className="intro">
        <h1>About Us</h1>
        <p>
          At <span className="highlight">Gamma Spectre</span>, we are redefining
          excellence with innovative solutions across consultancy, technology,
          manufacturing, and construction. Our goal is to deliver cutting-edge
          services tailored to meet your unique needs.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Mission</h2>
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
          <h2>Vision</h2>
          <p>
            Our vision at Gamma Spectre is to be a dynamic and versatile leader
            in the business world, known for our ability to adapt and excel in a
            variety of sectors. We aspire to provide innovative solutions that
            drive economic growth, enhance technological capabilities, and
            foster sustainable development.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value">
            <div className="icon-placeholder">🌟</div>
            <h3>Excellence</h3>
            <p>
              We strive for excellence in every aspect of our operations,
              upholding the highest standards of quality and performance.
            </p>
          </div>
          <div className="value">
            <div className="icon-placeholder">💡</div>
            <h3>Innovation</h3>
            <p>
              At the heart of what we do, we actively seek creative solutions to
              stay ahead of industry trends.
            </p>
          </div>
          <div className="value">
            <div className="icon-placeholder">🤝</div>
            <h3>Collaboration</h3>
            <p>
              We value partnerships with clients, experts, and industry peers to
              achieve success.
            </p>
          </div>
          <div className="value">
            <div className="icon-placeholder">🔒</div>
            <h3>Integrity</h3>
            <p>
              Transparency and ethical conduct define all our business
              interactions.
            </p>
          </div>
          <div className="value">
            <div className="icon-placeholder">🛡️</div>
            <h3>Safety</h3>
            <p>
              We prioritize the safety of our employees and stakeholders in
              every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo-placeholder">[Photo]</div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="team-photo-placeholder">[Photo]</div>
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <div className="team-photo-placeholder">[Photo]</div>
            <h3>Samuel Lee</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
