import React from 'react'
import ContactForm from './ContactForm'
import'./Contact.css'
function Contact() {
  return (
    <div className='contact'>
       <div className='company-details'>
       <h1> TechSolutions Inc</h1>
      <p>Welcome to TechSolutions Inc, where we are dedicated to providing cutting-edge technology solutions for all your web application needs.
            With a team of experienced developers and designers, we specialize in crafting innovative web applications that are tailored to meet
            the unique requirements of your business.</p>
       </div>

       <div className='contact-info'>
        <div className='info'>
          <h3>Address:</h3>
          <p>
          123 Main Street<br></br>
          Cityville, State
          Country
          Postal Code: 12345</p>
        </div>
        <div className='info'>
        <h3>Contact Number:</h3>
        <p>Main Office: +1 (123) 456-7890</p>
        <p>Customer Support: +1 (123) 456-7892</p>
        </div>
        <div className='info'>
        <h3>Email Address:</h3>
        <p>General Inquiries: info@example.com</p>
        <p>Customer Support: support@example.com</p>
        </div>
       </div>
    
      
     <ContactForm/>
    </div>
  )
}

export default Contact
