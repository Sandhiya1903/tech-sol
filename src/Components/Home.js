import React from 'react';
import './Home.css';
import Services from './Services';

function Home() {
  return (
    <div className='sections'>
      <div className='section-1'>
      
        <div className='intro-tech'>
        <h2 className='title' >TechSolutions Inc</h2>
          <p>Welcome to TechSolutions Inc, where we are dedicated to providing cutting-edge technology solutions for all your web application needs.
            With a team of experienced developers and designers, we specialize in crafting innovative web applications that are tailored to meet
            the unique requirements of your business.</p>
        </div>
      </div>
      <Services/>
    </div>
  );
}

export default Home;