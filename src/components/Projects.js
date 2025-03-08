import React, { Suspense } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bgpic from "../assets/images/bg-down.png";

import project1 from "../assets/images/project1.jpeg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";
import project4 from "../assets/images/project4.jpeg";
import project5 from "../assets/images/project5.jpeg";
import project6 from "../assets/images/project6.jpeg";

// Dynamic project images
const projectImages = [
  {
    title: "Project One",
    img:project1,
    desc: "Innovative tech solution.",
  },
  {
    title: "Project Two",
    img: project2,
    desc: "Sustainable infrastructure.",
  },
  {
    title: "Project Three",
    img: project3,
    desc: "Smart energy management.",
  },
  {
    title: "Project Four",
    img: project4,
    desc: "Cutting-edge AI technology.",
  },
  {
    title: "Project Five",
    img: project5,
    desc: "Cybersecurity advancement.",
  },
  {
    title: "Project Six",
    img: project6,
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
    <section className="bg-gray-100 py-16 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgpic})` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Projects</h2>
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
                className="bg-white shadow-lg rounded-lg p-6 text-center mr-2"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="mx-auto h-50 w-full object-cover rounded-md"
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

{/* <section className="bg-gray-100 py-16 relative h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url(${bgpic})` }}></section> */}