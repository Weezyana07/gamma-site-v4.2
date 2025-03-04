import React from "react";

const ServiceSection = ({ title, imgSrc, description, services }) => {
  return (
    <section className="bg-white py-12 px-6 shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Service Image */}
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
          loading="lazy"
        />

        {/* Service Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-2">{description}</p>

          {/* Services List */}
          <h3 className="text-xl font-semibold mt-4">Our Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {services.map((service, index) => (
              <li key={index} className="mt-1">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
