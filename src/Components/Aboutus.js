import React from "react";
import "./Aboutus.css";

import TeamMembers from "./TeamMembers";
import Details from "./Details";
function Aboutus() {
  return (
    <div>
      <div className="section">
      <div className="column">
        <h2> History</h2>
        <p>TechSolutions Inc was founded in [year] by [founders' names] with a vision for innovation.
           From humble beginnings, we grew into a leading software company, delivering cutting-edge solutions.
           Our dedication to quality earned us industry recognition and global clientele. 
           Milestones include launching flagship products, winning awards, and expanding globally.
            Committed to excellence, we drive positive change through technology.
            Looking ahead, we continue our journey with passion and innovation, shaping the future of
             software and digital transformation.</p>
      </div>
      <div className="column">
        <h2>Mission</h2>
        <p>At TechSolutions Inc, our mission is to empower businesses and individuals with innovative software solutions 
          that enhance productivity, streamline operations, and drive growth. We are committed to leveraging cutting-edge
           technologies to solve complex challenges and deliver value to our clients worldwide. With a focus on quality,
            integrity, and customer satisfaction, we strive to be the trusted partner of choice for digital transformation 
            initiatives. Through continuous innovation and collaboration, we aim to make a meaningful impact on the world, 
            shaping a future where technology enriches lives and enables limitless possibilities.</p>
      </div>
      <div className="column">
        <h2>Values</h2>
        <p>At TechSolutions Inc our core values form the foundation of everything we do. We are driven by innovation,
           constantly seeking new ideas to solve problems and drive progress. Quality is paramount in all our endeavors, 
           ensuring excellence in every product and service we deliver. Integrity guides our conduct, fostering trust and 
           strong relationships with our clients and partners. Customer focus is central to our approach, as we prioritize
            meeting and exceeding the needs of our clients. Collaboration is key to our success, as we believe in the power 
            of teamwork to achieve shared goals. Continuous improvement is ingrained in our culture, as we strive to learn, 
            grow, and evolve. Social responsibility is integral to our identity, as we aim to make a positive impact on society
             and the environment. Empowerment is at the heart of our organization, as we empower our employees to take ownership
              and grow personally and professionally</p>
      </div>
     

      
    </div>
    <div >
    <Details/>
    </div>
   
   

    </div>

   
  );
}

export default Aboutus;
