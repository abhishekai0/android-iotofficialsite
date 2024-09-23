import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Importing the CSS
import image1 from './images/image1.jpg'; // Correctly import images
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import logo from './images/logo.jpg'; // Import logo

const Homepage = () => {
  const images = [image1, image2, image3]; // Use imported images

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change image every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo">
            <img src={logo} alt="Android IoT Club Logo" /> {/* Use imported logo */}
          </div>
          <a href="#home" className="navbar-brand">Android IoT Club</a>
          <ul className="navbar-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* Add Upcoming Workshop Button */}
            <li>
              <a href="https://eventandworkshop.godaddysites.com/">
                <button className="btn-upcoming-workshop">Upcoming Workshop</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Auto-changing Image Section */}
      <section className="hero-section">
        <div className="image-slider">
          <img src={images[currentImageIndex]} alt="slideshow" className="slideshow-image fade-in" />
        </div>
      </section>

      {/* Static message with multi-color effect */}
      <section className="message-section">
        <div className="static-message">
          <h2><span className="multi-color">ℍ𝕖𝕝𝕝𝕠!!! 𝒖𝒔𝒆𝒓 𝔀𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 </span><span className="multi-color">Android & IoT Club  𝕠𝕗𝕗𝕚𝕔𝕚𝕒𝕝 𝕤𝕚𝕥𝕖.</span></h2>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
