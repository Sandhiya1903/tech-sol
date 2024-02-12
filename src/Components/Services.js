import React, { useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  const [activeService, setActiveService] = useState("DigitalMarketing");

  const serviceInfo = {
    DigitalMarketing:
      "TechSolutions can help businesses promote their products or services online through various digital channels .",
    WebsiteDesignDevelopment:
      "Creating visually appealing and functional websites for businesses to establish their online presence. ",
    GraphicDesign:
      "Creating visual assets such as logos, branding materials, infographics, and other graphic elements for both digital and print media.",
    EcommerceSolutions:
      "Helping businesses set up online stores, integrate payment gateways, optimize product listings, and enhance the overall shopping experience for customers.",
    ITConsulting:
      "Providing expert advice and guidance on various IT-related matters such as infrastructure setup, cybersecurity, data management, cloud computing, and IT strategy planning.",
    TrainingWorkshops:
      "Providing training sessions and workshops to educate businesses and their employees on various tech-related topics .",
  };

  const handleClick = (service) => {
    setActiveService(service);
  };

  return (
    <div className="services">
      <div>
        <h1>Services we provide</h1>
      </div>
      <div className="buttons">
        {Object.keys(serviceInfo).map((service) => (
          <button
            key={service}
            className={service === activeService ? "active" : ""}
            onClick={() => handleClick(service)}
          >
            {service}
          </button>
        ))}
      </div>
      <div className="info">
        <p>{serviceInfo[activeService]}</p>
      </div>
      <div>
        <Link to='/contact'><button>Contact us</button></Link>
        
      </div>
    </div>
  );
}

export default Services;
