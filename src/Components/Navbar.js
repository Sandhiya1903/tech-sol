import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-container'>
      <div className="navbar-title">TechSolutions Inc</div>
      <ul className="navbar-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
