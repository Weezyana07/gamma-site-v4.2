import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import aboutImg from "../assets/images/about.png";
import missionImg from "../assets/images/mission.png";
import wils from "../assets/images/wils.jpg";
import mfon from "../assets/images/mfon2.jpg";
import ibr from "../assets/images/ibr4.jpg";
import fahad from "../assets/images/fahad.jpg";
import "./AboutPage.css";
// import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="about-header">
        <div className="about-container">
          {/* Text and Image Section */}
          <div className="about-text-and-image">
            <div className="about-container">
              <div className="about-text-section">
                <h1 className="about-title">GAMMA SPECTRE:</h1>
                <h2 className="about-subtitle">
                  Uniting Innovation with Purpose
                </h2>
              </div>
            </div>
            <div className="about-img-container">
              <div className="about-image-section">
                <img
                  src="images/gamma.png"
                  alt="Professional person"
                  className="about-person-image"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="about-description-section">
            <p className="about-description">
              Welcome to <span className="highlight">GAMMA SPECTRE</span>, where
              innovation meets passion. Founded 2022 we've been dedicated to
              providing cutting-edge solutions, revolutionizing industries. Our
              journey began with a simple vision: to transform the way
              businesses operate, enhance user experiences, by providing expert
              guidance.
            </p>
          </div>
        </div>
      </div>
      {/* Introductory Statement */}
      <section className="intro">
        <h1>About Us</h1>
        <div className="intro-section">
          <p>
            At <span className="highlight">Gamma Spectre</span>, we are a
            dynamic, forward-thinking company redefining excellence across
            consultancy, information technology, construction, manufacturing,
            and general contracting. Guided by innovation and adaptability, we
            deliver tailored solutions and cutting-edge services to meet the
            unique needs of our clients. With a highly skilled team and
            strategically positioned personnel, we ensure precision, speed, and
            efficiency in project delivery across Nigeria. We prioritize client
            satisfaction, working tirelessly to deliver results on time and
            within budget. Our commitment to excellence and innovation drives us
            to provide superior services and develop solutions that empower
            businesses to thrive.
          </p>
          <img src={aboutImg} alt="IT" className="it-img" />
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-vision-section">
          <img src={missionImg} alt="IT" className="mv-img" />
          <div>
            <h1>Mission</h1>
            <p>
              At <span className="highlight">Gamma Spectre</span>, our mission
              is to deliver exceptional solutions, services, and products in the
              fields of consultancy, information technology, construction,
              manufacturing, and general contracting. We are committed to
              enabling progress, improving communities, and providing value to
              our clients through innovative, high-quality, and reliable
              offerings.
            </p>
            <h1>Vision</h1>
            <p>
              Our vision at <span className="highlight">Gamma Spectre</span> is
              to be a dynamic and versatile leader in the business world, known
              for our ability to adapt and excel in a variety of sectors. We
              aspire to provide innovative solutions that drive economic growth,
              enhance technological capabilities, and foster sustainable
              development.
            </p>
          </div>
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
        <h2>Management Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo-placeholder">
              <img src={ibr} alt="team" className="team-img" />
            </div>
            <h3>Ibrahim S. Nayaya</h3>
            <p>MD/CEO</p>
          </div>
          <div className="team-member">
            <div className="team-photo-placeholder">
              <img src={wils} alt="team" className="team-img" />
            </div>
            <h3>Wil's Akpan</h3>
            <p>Director</p>
          </div>
          <div className="team-member">
            <div className="team-photo-placeholder">
              <img src={mfon} alt="team" className="team-img" />
            </div>
            <h3>Mfon Akpabio (PhD)</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <div className="team-photo-placeholder">
              <img src={fahad} alt="team" className="team-img" />
            </div>
            <h3>Fahad Abdulkadir</h3>
            <p>IT Manager</p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
