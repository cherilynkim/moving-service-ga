import React, { useState } from 'react';
import Services from './pages/Services';
import ContactForm from './pages/ContactForm';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('services');

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <Services />;
      case 'contact':
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <nav className="tabs-nav">
        <button
          className={activeTab === 'services' ? 'active' : ''}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </nav>
      <div className="tabs-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Tabs;
