import React from 'react';
import R from '../images/R.png';
function Navbar() {
    return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={R} alt="Avatar Logo"  class="rounded-pill"/> 
        </a>
      </div>
    </nav>
    );
}

export default Navbar;