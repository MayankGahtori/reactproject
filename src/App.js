import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import About from './components/pages/About';


import {
  BrowserRouter as Router,
  
  
  
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router exact path="/" component={<Dashboard/>}></Router>
      <Router path="/about" component={<About/>}></Router>
    </div>
      
          
          
        
     
       
        
        
      
  
    
  );
}

export default App;

