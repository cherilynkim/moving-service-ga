import React from 'react';
import './Header.css';
import '../App.css';


function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Moving Service GA</h1>
        <p className="slogan">Your Satisfaction is Our Utmost Priority</p>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
