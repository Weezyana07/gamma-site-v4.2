import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold">
          Welcome to Gamma Spectre Solutions
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Innovative solutions for your business growth.
        </p>
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
