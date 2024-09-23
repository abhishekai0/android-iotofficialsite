import React, { useState, useEffect } from 'react';
import './WorkshopPage.css'; // Importing the CSS

const WorkshopPage = () => {
  const [workshops, setWorkshops] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', workshopId: '' });
  const [message, setMessage] = useState('');

  // Fetch workshops from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/workshops')
      .then((response) => response.json())
      .then((data) => setWorkshops(data))
      .catch((error) => console.error('Error fetching workshops:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({ name: '', email: '', workshopId: '' });
      })
      .catch((error) => console.error('Error during registration:', error));
  };

  return (
    <div className="workshop-page">
      <h1>Upcoming Workshops</h1>
      <div className="workshop-list">
        {workshops.map((workshop) => (
          <div className="workshop-card" key={workshop._id}>
            <h2>{workshop.title}</h2>
            <p><strong>Date:</strong> {workshop.date}</p>
            <p><strong>Time:</strong> {workshop.time}</p>
            <p>{workshop.description}</p>
          </div>
        ))}
      </div>

      <h2>Register for a Workshop</h2>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <select
          name="workshopId"
          value={formData.workshopId}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Workshop</option>
          {workshops.map((workshop) => (
            <option key={workshop._id} value={workshop._id}>
              {workshop.title} ({workshop.date})
            </option>
          ))}
        </select>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WorkshopPage;
