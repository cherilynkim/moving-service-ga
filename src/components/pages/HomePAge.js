import React from 'react';

function HomePage() {
  return (
    <div className="home">
      <header className="App-header">
        <h1 className="App-title">Moving Service GA</h1>
        <div className="App-slogan-container">
          <p className="App-slogan">Your Satisfaction is Our Utmost Priority</p>
          <p className="App-slogan">Call Us Today: 678-860-2800</p>
        </div>
      </header>

      <div className="additional-sections">
        <div className="blank-after-slogan"></div>
        <section className="text-section">
          <h2>About Our Company</h2>
          <p>
            Moving Service GA is committed to providing top-notch moving services to ensure your
            move is smooth and stress-free. We handle residential and commercial moves with the
            utmost care and professionalism. Our teams are recruited with experienced and friendly workers.
          </p>
        </section>
        <section className="image-section">
          <img src="./moving-service-ga/image1.jpg" alt="Moving truck" className="additional-image" />
        </section>
        <section className="text-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide reliable and efficient moving services that exceed our
            customers' expectations. We strive to make every move a positive experience, offering
            personalized services to meet your unique needs.
          </p>
        </section>
        <section className="image-section">
          <img src="./moving-service-ga/image4.jpg" alt="Moving team" className="additional-image" />
        </section>
        <section className="text-section">
          <h2>Our Special Offers</h2>
          <p>
            We offer a variety of special offers to make your move more affordable and stress-free.
            Contact us today to learn more about our current promotions and discounts.
          </p>
        </section>
        <div className="blank"></div>
        <div className="card-section">
          <div className="card">
            <img src="./moving-service-ga/image19.jpg" alt="Service 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Plastic Wrapping</h3>
              <p className="card-description">Our company offers a service of wrapping large items with plastic wrap to ensure cleanliness and protection </p>
            </div>
          </div>
          <div className="card">
            <img src="./moving-service-ga/image20.jpg" alt="Service 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Carpets</h3>
              <p className="card-description">Our moving company provides carpets during the move to ensure the floor remains undamaged.</p>
            </div>
          </div>
          <div className="card">
            <img src="./moving-service-ga/image17.jpg" alt="Service 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Nationwide</h3>
              <p className="card-description">Our company offers nationwide moving services with our specialized trucks, ensuring your belongings reach their destination safely and efficiently.</p>
              <div className="blanks"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
