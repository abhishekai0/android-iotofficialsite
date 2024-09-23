import React from 'react';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import './App.css';  // Add global styling

function App() {
  return (
    <div className="App">
      <Homepage />
      <AboutUs />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
