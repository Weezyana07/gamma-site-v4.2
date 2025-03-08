import React, { Suspense } from "react";
import "./Industries.css";
import consultancy from "../assets/images/Consulting.png";
import information from "../assets/images/information.png";
import manufacturing from "../assets/images/manufacturing.png";
import construction from "../assets/images/Construction.png";
import general from "../assets/images/General.png";

// Lazy load images to improve performance
const industryImages = {
  consultancy,
  information,
  manufacturing,
  construction,
  general,
};

const industries = [
  {
    title: "Consultancy",
    description:
    "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
    imgKey: "consultancy",
    link: "/services/consultancy",
  },
  {
    title: "Information Technology",
    description:
    "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
    imgKey: "information",
    link: "/services/it",

  },
  {
    title: "Manufacturing",
    description:
    "Our construction division is dedicated to the creation of quality infrastructures, from residential and commercial buildings to civil engineering projects.",
    imgKey: "manufacturing",
    link: "/services/manufacturing",
  },
  {
    title: "Construction",
    description:
    "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
    imgKey: "construction",
    link: "/services/construction",
  },
  {
    title: "General Contracts",
    description:
    "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
    imgKey: "general",
    link: "/services/general",
  },
];

const Industries = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Industries We Serve</h2>
        <p className="text-lg text-gray-700 text-center mt-2">
          Delivering excellence across multiple sectors.
        </p>

        {/* Lazy Load Industry Cards */}
        <Suspense
          fallback={
            <div className="text-center py-10">Loading industries...</div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center industry-card"
              >
                <img
                  src={industryImages[industry.imgKey]}
                  alt={industry.title}
                  className="mx-auto h-24 w-24 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mt-4">{industry.title}</h3>
                <p className="text-gray-600 mt-2">{industry.description}</p>
                <a href={industry.link} className="read-more">
                READ MORE
              </a>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Industries;
