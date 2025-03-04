import React from "react";
import Industries from "../components/Industries";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clientele from "../components/Clientele";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import homeJPG from "../assets/images/home.jpg";
import bgService from "../assets/images/bgService.jpg";
import "./HomePage.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-header">
        <div className="top-image">
          {/* <img
            src={homeJPG}
            alt="Description of the image"
            style="display: none;"
          /> */}
        </div>
        <div className="mid-text">
          <p>
            At <Strong>GAMMA SPECTRE</Strong>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
        <div className="bottom-image">
          {/* <img
            src={bgService}
            alt="Description of the image"
            style="display: none;"
          /> */}
        </div>
        <div className="container">
          <div className="welcome">
            <h1 className="hero-title">Unlocking Potential:</h1>
            <h2 className="hero-subtitle">
              Transforming Businesses with Technology and Insight.
            </h2>
          </div>
        </div>
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
