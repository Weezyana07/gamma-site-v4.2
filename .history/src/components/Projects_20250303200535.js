import React, { Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Dynamic project images
const projectImages = [
  {
    title: "Project One",
    img: "../assets/images/project1.jpeg",
    desc: "Innovative tech solution.",
  },
  {
    title: "Project Two",
    img: "../assets/images/project2.jpeg",
    desc: "Sustainable infrastructure.",
  },
  {
    title: "Project Three",
    img: "../assets/images/project3.jpeg",
    desc: "Smart energy management.",
  },
  {
    title: "Project Four",
    img: "../assets/images/project4.jpeg",
    desc: "Cutting-edge AI technology.",
  },
  {
    title: "Project Five",
    img: "../assets/images/project5.jpeg",
    desc: "Cybersecurity advancement.",
  },
  {
    title: "Project Six",
    img: "../assets/images/project6.jpeg",
    desc: "Next-gen manufacturing.",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Projects = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Recent Projects</h2>
        <p className="text-lg text-gray-700 text-center mt-2">
          A showcase of our successful implementations.
        </p>

        {/* Lazy Load Project Carousel */}
        <Suspense
          fallback={
            <div className="text-center py-10">Loading projects...</div>
          }
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            className="mt-8"
          >
            {projectImages.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="mx-auto h-40 w-full object-cover rounded-md"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
              </div>
            ))}
          </Carousel>
        </Suspense>
      </div>
    </section>
  );
};

export default Projects;
