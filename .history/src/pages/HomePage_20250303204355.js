import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css";

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
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <h1 className="text-5xl font-bold">Unlocking Potential:</h1>
          <h2 className="text-2xl mt-4">
            Transforming Businesses with Technology and Insight.
          </h2>
          <p className="mt-6 text-lg">
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
