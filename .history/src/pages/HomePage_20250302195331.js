import React from "react";
import Industries from "../components/Industries";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clientele from "../components/Clientele";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./HomePage.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <strong>GAMMA SPECTRE</strong>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
        <div className="bottom-image"></div>
        <section>
          <div className="welcome">
            <h1 className="hero-title">Unlocking Potential:</h1>
            <h2 className="hero-subtitle">
              Transforming Businesses with Technology and Insight.
            </h2>
          </div>
        </section>
      </div>
      <Services />
      <Industries />
      <Projects />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
