import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    </Router>
    
  );
}

export default App;

