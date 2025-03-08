import React, { Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Clientele.css";

import copslogo from "../assets/images/copslogo.png";
import defencelogo from "../assets/images/defencelogo.png";
import minedulogo from "../assets/images/minedulogo.png";

// Dynamic client images
const clienteleData = [
  { name: "Cops Limited", 
    img: copslogo
   },
  {
    name: "Federal Ministry of Defence",
    img: defencelogo,
  },
  { name: "Ministry of Education", 
    img: minedulogo },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Clientele = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="clientele-carousel-container">
        <h2 className="text-3xl font-bold text-center">Our Trusted Clients</h2>
        <p className="text-lg text-gray-700 text-center mt-2">
          Organizations that rely on our expertise.
        </p>

        {/* Lazy Load Client Logos */}
        <Suspense
          fallback={<div className="text-center py-10">Loading clients...</div>}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="mt-8"
          >
            {clienteleData.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center mr-2 mb-4"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="mx-auto h-24 w-24 object-contain"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mt-4">{client.name}</h3>
              </div>
            ))}
          </Carousel>
        </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
