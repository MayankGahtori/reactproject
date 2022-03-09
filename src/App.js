import React from 'react';
import './App.css';
import { MDBFooter } from 'mdb-react-ui-kit';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';
import Footer from'./components/inc/Footer';


import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
     
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;

