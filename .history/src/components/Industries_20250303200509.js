import React, { Suspense } from "react";

// Lazy load images to improve performance
const industryImages = {
  consultancy: "../assets/images/Consulting.png",
  information: "../assets/images/information.png",
  manufacturing: "../assets/images/manufacturing.png",
  construction: "../assets/images/Construction.png",
  general: "../assets/images/General.png",
};

const industries = [
  {
    title: "Consultancy",
    description: "Expert consultancy services tailored to business needs.",
    imgKey: "consultancy",
  },
  {
    title: "Information Technology",
    description: "Advanced IT solutions for business efficiency.",
    imgKey: "information",
  },
  {
    title: "Manufacturing",
    description: "Sustainable and cost-effective manufacturing solutions.",
    imgKey: "manufacturing",
  },
  {
    title: "Construction",
    description: "High-quality construction services with expert oversight.",
    imgKey: "construction",
  },
  {
    title: "General Contracts",
    description: "Comprehensive contract management and execution.",
    imgKey: "general",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={industryImages[industry.imgKey]}
                  alt={industry.title}
                  className="mx-auto h-24 w-24 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mt-4">{industry.title}</h3>
                <p className="text-gray-600 mt-2">{industry.description}</p>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Industries;
