import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-container'>
      <div className="navbar-title">TechSolutions Inc</div>
      <div className='small'>
        
      </div>
      <ul className="navbar-links">
        <li style={{paddingRight: '20px'}}><Link to='/'>Home</Link></li>
        <li style={{paddingRight: '20px'}}><Link to='/about'>About</Link></li>
        <li  style={{paddingRight: '20px'}}><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
