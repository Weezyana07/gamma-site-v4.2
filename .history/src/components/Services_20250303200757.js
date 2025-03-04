import React from "react";

const serviceData = [
  {
    title: "Expert Guidance",
    img: "../assets/images/expert.svg",
    desc: "Tailored, data-driven insights and strategic direction.",
  },
  {
    title: "Innovative Solutions",
    img: "../assets/images/innovation.svg",
    desc: "Cutting-edge technology to streamline your business operations.",
  },
  {
    title: "24/7 Support",
    img: "../assets/images/support.svg",
    desc: "Round-the-clock support to keep your business running smoothly.",
  },
  {
    title: "Strategic Partnerships",
    img: "../assets/images/partnership.svg",
    desc: "Collaboration with industry leaders for unmatched service quality.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
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
                className="mx-auto h-24 w-24 object-contain"
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
