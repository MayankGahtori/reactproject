import React from 'react';
import Navbar from './components/inc/Navbar';

import About from './components/pages/About';

import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        
        <Navbar />
       
        <About />
       
      </div>
    </Router>
    
  );
}

export default App;

