import React from 'react';
import './App.css';

import About from './components/pages/About';

import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
      
        <About />
      </div>
    </Router>
    
  );
}

export default App;

