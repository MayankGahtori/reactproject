import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import About from './components/pages/About';


import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
     
       <Dashboard/>
        <About/>
        
      </div>
    </Router>
    
  );
}

export default App;

