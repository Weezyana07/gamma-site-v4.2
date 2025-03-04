import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Lazy loading service section
const ServiceSection = lazy(() => import("../components/ServiceSection"));

// Service data array for dynamic rendering
const services = [
  {
    title: "Consultancy",
    img: "../assets/images/consul.jpg",
    desc: "Expert business consulting tailored to your needs.",
  },
  {
    title: "IT Services",
    img: "../assets/images/telecom.jpg",
    desc: "Cutting-edge technology solutions and IT support.",
  },
  {
    title: "Construction",
    img: "../assets/images/cons.jpg",
    desc: "Quality construction services with expert oversight.",
  },
  {
    title: "Manufacturing",
    img: "../assets/images/manufact.webp",
    desc: "Efficient and sustainable manufacturing solutions.",
  },
  {
    title: "General Contracts",
    img: "../assets/images/contract.webp",
    desc: "Diverse contract management services.",
  },
];

const ServicePage = () => {
  const location = useLocation();

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Our Services - Gamma Spectre Solutions</title>
        <meta
          name="description"
          content="Explore our top-tier services, from IT solutions to consultancy and construction."
        />
        <meta
          property="og:title"
          content="Gamma Spectre Solutions - Services"
        />
        <meta
          property="og:description"
          content="Comprehensive services including IT, consultancy, and more."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg text-gray-700 mt-4">
          Comprehensive solutions for businesses worldwide.
        </p>
      </section>

      {/* Lazy Load Services */}
      <Suspense
        fallback={<div className="text-center py-10">Loading services...</div>}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              img={service.img}
              desc={service.desc}
            />
          ))}
        </div>
      </Suspense>

      <Footer />
    </>
  );
};

export default ServicePage;
