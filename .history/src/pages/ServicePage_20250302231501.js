// src/pages/Services.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServiceSection from "../components/ServiceSection";
import consultancyImg from "../assets/images/consul.jpg";
import itImg from "../assets/images/telecom.jpg";
import constructionImg from "../assets/images/cons.jpg";
import manufacturingImg from "../assets/images/manufact.webp";
import generalImg from "../assets/images/contract.webp";
import person from "../assets/images/person.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ServicePage.css";

const Services = () => {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const sectionId = location.hash.substring(1);
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const sectionId = location.hash.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="services-page">
      <Header />
      <div className="service-header">
        <div className="content-container">
          {/* Text and Image Section */}
          <div className="text-and-image">
            <div className="text-container">
              <div className="text-section">
                <h1 className="main-title">Empowering Your Success:</h1>
                <h2 className="subtitle">
                  Explore Our Comprehensive Services Today!
                </h2>
              </div>
            </div>
            <div className="img-container">
              <div className="image-section">
                <img
                  src={person}
                  alt="Professional"
                  className="person-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="description-section">
            <p className="description">
              At <span className="highlight">GAMMA SPECTRE</span>, we pride
              ourselves on delivering exceptional services tailored to meet your
              needs. Our team is dedicated to providing top-notch solutions that
              exceed your expectations and help you achieve your goals. Whether
              you're a small startup or a large corporation, we have the
              expertise and resources to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <ServiceSection
        id="consultancy"
        title="Consultancy Division"
        imgSrc={consultancyImg}
        description={
          <>
            <span className="highlight">Gamma Spectre</span>'s Consultancy
            Division provides expert consulting services across industries,
            helping businesses tackle challenges, seize opportunities, and
            achieve strategic goals. From market research to process
            optimization and regulatory compliance, our experienced team
            delivers tailored solutions for success.
          </>
        }
        services={[
          "Strategic Planning",
          "Market Research and Analysis",
          "Operational Efficiency",
          "Regulatory Compliance",
          "Financial Advisory",
        ]}
      />
      <ServiceSection
        id="it"
        title="Information Technology Division"
        imgSrc={itImg}
        description={
          <>
            <span className="highlight">Gamma Spectre</span>'s Information
            Technology (Telecom) Division is dedicated to delivering a wide
            range of technology-related services. We understand the critical
            role that information technology plays in the modern business
            landscape, and we offer innovative solutions that empower our
            clients to excel in the digital age.
          </>
        }
        services={[
          "Network Infrastructure Design and Implementation",
          "Software Development",
          "Cyber Security Solutions",
          "Telecommunication Services",
          "Data Management and Analysis",
        ]}
      />
      <ServiceSection
        id="construction"
        title="Construction Division"
        imgSrc={constructionImg}
        description={
          <>
            <span className="highlight">Gamma Spectre</span>'s Construction
            Division is dedicated to providing a wide range of construction
            services, covering various aspects of the construction industry. We
            take pride in delivering high-quality projects while adhering to the
            highest safety and sustainability standards.
          </>
        }
        services={[
          "Residential Construction",
          "Commercial Construction",
          "Civil Engineering",
          "Sustainable Building Practices",
          "Project Management",
        ]}
      />
      <ServiceSection
        id="manufacturing"
        title="Manufacturing Division"
        imgSrc={manufacturingImg}
        description={
          <>
            <span className="highlight">Gamma Spectre</span>'s Manufacturing
            Division is a cornerstone of our company, specializing in the
            production of a wide range of products. We operate state-of-the-art
            facilities that are dedicated to precision manufacturing, quality
            control, and innovation.
          </>
        }
        services={[
          "Advanced Technological Equipment",
          "Consumer Goods",
          "Civil Engineering",
          "Quality Control",
          "Innovation and Research",
        ]}
      />
      <ServiceSection
        id="contracts"
        title="General Contract Division"
        imgSrc={generalImg}
        description={
          <>
            <span className="highlight">Gamma Spectre</span>'s General Contract
            Division is committed to delivering comprehensive general
            contracting services. We offer project management, procurement, and
            execution for a wide range of projects across diverse sectors.
          </>
        }
        services={[
          "Project Management",
          "Procurement and Supply Chain Management",
          "Cost Estimation and Budgeting",
          "Subcontractor Management",
          "Quality Assurance and Compliance",
        ]}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
