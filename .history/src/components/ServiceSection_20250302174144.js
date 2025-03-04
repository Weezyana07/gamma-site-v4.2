// src/components/ServiceSection.js
import React from 'react';
import './ServiceSection.css';

const ServiceSection = ({ title, imgSrc, description, services }) => {
  return (
    <div className="service-section">
      <h2>{title}</h2>
      <div className="service-content">
        <img src={imgSrc} alt={`${title}`} className="service-img" />
        <div className="service-text">
          <p>{description}</p>
            <h3>Our services include:</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
