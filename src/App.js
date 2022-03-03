import React from 'react';
import './App.css';

import About from './components/pages/About';
import Navbar from './components/inc/Navbar';


import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
     
        <Navbar/>
        <About/>
      </div>
    </Router>
    
  );
}

export default App;

