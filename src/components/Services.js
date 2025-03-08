import React from "react";
import "./Services.css";

// Import images properly
import expert from "../assets/images/expert.svg";
import innovation from "../assets/images/innovation.svg";
import support from "../assets/images/support.svg";
import partnership from "../assets/images/partnership.svg";

const serviceData = [
  {
    title: "Expert Guidance",
    img: expert,
    desc: "Benefit from tailored, data-driven insights and strategic direction offered by our seasoned consultants, ensuring personalized solutions that align with your objectives.",
  },
  {
    title: "Innovative Solutions",
    img: innovation,
    desc: "Harness technology for growth with innovative solutions tailored to your business. Build trust through collaboration, transparency, and open communication for success.",
  },
  {
    title: "Reliable Support",
    img: support,
    desc: "Count on our unwavering commitment to provide prompt and dependable assistance at every stage of your projects, ensuring smooth progress and successful outcomes.",
  },
  {
    title: "Strategic Partnerships",
    img: partnership,
    desc: "Forge a strategic alliance grounded in trust and transparency, where mutual success is prioritized through open communication and efforts towards excellence.",
  },
];

const Services = () => {
  return (
    <section className="bg-white-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 aria-label="Services We Provide" className="text-3xl font-bold">What you can expect from us</h2>
        <p className="text-lg text-gray-700 mt-2">
          Discover how we can elevate your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
