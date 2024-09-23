// src/components/ContactUs.js
import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp icon
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form Data:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError('Please fill in all fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          {submitted && <p className="success-message">Your message has been sent!</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <h3>Android & IoT Club</h3>
            <p>Connecting enthusiasts and innovators in the Android and IoT space.</p>

            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#events">Events</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/androidandiot/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/androidandiot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/android.iot_gietu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://chat.whatsapp.com/KAN1qBTFu4918lZYO70L5O" // Add your WhatsApp link here
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Android & IoT Club. All rights reserved.</p>
          <h5>developed by darkcoder</h5>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
