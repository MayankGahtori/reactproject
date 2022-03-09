import React from 'react';
import R from '../images/R.png';
function Navbar() {
    return(
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div class="container">

    <a class="navbar-brand me-2" href="/">
      <img
        src={R}
        height="75"
      
        alt="MDB Logo"
        loading="lazy"
        
      />
    </a>


    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About Us</a>
        </li>
      </ul>
      

      <div class="d-flex align-items-left">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>

      </div>
    </div>
    
  </div>
  
</nav>
    )
}

export default Navbar;