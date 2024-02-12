import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>TechSolutions Inc</h3>
            <p>We are a leading tech company specializing in innovative solutions for businesses.</p>
            <p>&copy; TechSolutions Inc. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;