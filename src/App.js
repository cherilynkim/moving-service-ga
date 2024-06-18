import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/HomePAge';
import Services from './components/pages/Services';
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footer';
import './App.css';

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      <button onClick={() => navigate('/')}>Home Page</button>
      <button onClick={() => navigate('/services')}>Services/ Reviews</button>
      <button onClick={() => navigate('/contact-form')}>Contact Form</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <img src="./moving-service-ga/logo.jpg" alt="Logo" className="logo" />
          <NavigationButtons />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
