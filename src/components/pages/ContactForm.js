// src/components/ContactForm.js
import React, { useState } from 'react';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mayrgneb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="form-status">{status}</div>
      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p>Email: movingservicega@gmail.com</p>
        <p>Instagram: @moving.service.ga</p>
        <p>Phone: (678) 860-2800</p>
      </div>
      <div className="blanksform"> 
      </div>
    </div>
  );
}

export default ContactForm;
