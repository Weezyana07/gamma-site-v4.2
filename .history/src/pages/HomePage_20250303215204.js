import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/images/bgService.jpg";
import overlayImage from "../assets/images/home.jpg";
//import "./HomePage.css";

// Lazy loading components for performance optimization
const Industries = lazy(() => import("../components/Industries"));
const Services = lazy(() => import("../components/Services"));
const Projects = lazy(() => import("../components/Projects"));
const Clientele = lazy(() => import("../components/Clientele"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Home - Gamma Spectre Solutions</title>
        <meta
          name="description"
          content="Leading IT and business solutions provider."
        />
        <meta property="og:title" content="Gamma Spectre Solutions" />
        <meta
          property="og:description"
          content="Expert IT consultancy, manufacturing, and more."
        />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* 70vh Overlay Section */}
        <div
          className="relative w-full h-[70vh] bg-cover bg-center flex flex-col justify-center px-6"
          style={{
            backgroundImage: `url(${overlayImage})`, // ✅ Overlay Image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left-Aligned Hero Text with Container Alignment */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-left text-#1d70b6">
              Unlocking Potential:
            </h1>
            <h2 className="text-2xl mt-4 text-left">
              Transforming Businesses with Technology and Insight.
            </h2>
          </div>
        </div>

        {/* 30vh Section for Paragraph (Now Centered) */}
        <div className="relative h-[30vh] flex items-center justify-center px-6">
          <p className="text-lg text-gray-900 max-w-7xl text-center">
            At <strong>GAMMA SPECTRE</strong>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Industries />
        <Services />
        <Projects />
        <Clientele />
        <Contact />
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
