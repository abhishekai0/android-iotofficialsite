import React from 'react';
import './Projects.css';  // Import custom CSS for the project styling
import IotVideo from './video/Internet of things.mp4'; // Import the video file
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={IotVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <h2>Our Projects</h2>
        
        <div className="project-grid">
          <div className="project-item">
            <img src="/images/project1.jpg" alt="Smart Home IoT System"/>
            <h4>Smart Home IoT System</h4>
            <p>Automating home appliances with IoT.</p>
            <li></li>
          </div>

          <div className="project-item">
            <img src="/images/project2.jpg" alt="AI Chatbot"/>
            <h4>AI Chatbot</h4>
            <p>Chatbot for customer support using natural language processing.</p>
          </div>

          <div className="project-item">
            <img src="/images/project3.jpg" alt="E-commerce Platform"/>
            <h4>ANDRIOD & IOT CLUB FIRST APP</h4>
            <p>APP that cantent of home page login and registration page .</p>
          </div>

          <div className="project-item">
            <img src="/images/project4.jpg" alt="Health Monitoring App"/>
            <h4>Health Monitoring App</h4>
            <p>App for tracking and monitoring health metrics.</p>
          </div>
        </div>

        <h2>Upcoming Projects</h2>
        <div className="upcoming-project-grid">
          <div className="upcoming-project-item">
            <img src="/images/upcoming1.jpg" alt="Blockchain Payment System"/>
            <h4>Blockchain security</h4>
            <p>security system using blockchain technology.</p>
          </div>
          
          <div className="upcoming-project-item">
            <img src="/images/upcoming2.jpg" alt="iot "/>
            <li>advance iot base project </li>
            <p>IoT doorbell,Weather Reporting System ,etc.</p>
            <h4>Autonomous Drone</h4>

            <p>A drone with AI for autonomous navigation and surveillance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
