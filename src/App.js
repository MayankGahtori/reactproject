import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import About from './components/pages/About';


import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

