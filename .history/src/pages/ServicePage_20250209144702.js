// src/pages/Services.js
import React from "react";
import ServiceSection from "../components/ServiceSection";
import consultancyImg from "../assets/images/contact.jpg";
import itImg from "../assets/images/contact.jpg";
import constructionImg from "../assets/images/contact.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";
import "./ServicePage.css";

const Services = () => {
  return (
    <div className="services-page">
      <div className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <span>GAMMA SPECTRE</span>, we pride ourselves on delivering
            exceptional services tailored to meet your needs. Our team is
            dedicated to providing top-notch solutions that exceed your
            expectations and help you achieve your goals. Whether you're a small
            startup or a large corporation, we have the expertise and resources
            to support you every step of the way.
          </p>
        </div>
        <div className="bottom-image"></div>
        <Header />
        <div className="welcome">
          <h1 className="hero-title">Empowering Your Success:</h1>
          <h2 className="hero-subtitle">
            Explore Our Comprehensive Services Today!
          </h2>
        </div>
      </div>
      <ServiceSection
        title="Consultancy Division"
        imgSrc={consultancyImg}
        description="Gamma Spectre's Consultancy Division provides expert consulting services across industries, helping businesses tackle challenges, seize opportunities, and achieve strategic goals. From market research to process optimization and regulatory compliance, our experienced team delivers tailored solutions for success."
        services={[
          "Strategic Planning",
          "Market Research and Analysis",
          "Operational Efficiency",
          "Regulatory Compliance",
          "Financial Advisory",
        ]}
      />
      <ServiceSection
        title="Information Technology Division"
        imgSrc={itImg}
        description="Gamma Spectre's Information Technology (Telecom) Division is dedicated to delivering a wide range of technology-related services. We understand the critical role that information technology plays in the modern business landscape, and we offer innovative solutions that empower our clients to excel in the digital age. "
        services={[
          "Network Infrastructure Design and Implementation",
          "Software Development",
          "Cyber Security Solutions",
          "Telecommunication Services",
          "Data Management and Analysis",
        ]}
      />
      <ServiceSection
        title="Construction Division"
        imgSrc={constructionImg}
        description="Gamma Spectre's Construction Division is dedicated to providing a wide range of construction services, covering various aspects of the construction industry. We take pride in delivering high-quality projects while adhering to the highest safety and sustainability standards."
        services={[
          "Residential Construction",
          "Commercial Construction",
          "Civil Engineering",
          "Sustainable Building Practices",
          "Project Management",
        ]}
      />
      <ServiceSection
        title="Manufacturing Division"
        imgSrc={itImg}
        description="Gamma Spectre's Manufacturing Division is a cornerstone of our company, specializing in the production of a wide range of products. We operate state-of-the-art facilities that are dedicated to precision manufacturing, quality control, and innovation. "
        services={[
          "Advanced Technological Equipment",
          "Consumer Goods",
          "Civil Engineering",
          "Quality Control",
          "Innovation and Research",
        ]}
      />
      <ServiceSection
        title="General Contract Division"
        imgSrc={constructionImg}
        description="Gamma Spectre's General Contract Division is committed to delivering comprehensive general contracting services. We offer project management, procurement, and execution for a wide range of projects across diverse sectors. "
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
