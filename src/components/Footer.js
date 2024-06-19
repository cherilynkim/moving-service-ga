// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Phone: 678-860-2800</p>
        <p>Email: <a href="mailto:movingservicega@gmail.com">movingservicega@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/movingservice" target="_blank" rel="noopener noreferrer">@ga_moving_service</a></p>
      </div>
      <div className="footer-section-2">
        <h3>Find Us</h3>
        <p>2534 Sever Rd NW, Lawrenceville, GA 30043</p>
      </div>
    </footer>
  );
}

export default Footer;
