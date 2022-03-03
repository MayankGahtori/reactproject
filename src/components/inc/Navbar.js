import React from 'react';

function Navbar() {
    return(
      <section className='navbar-bg gradient'>
      <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <img src={IMG} class="img-fluid"></img>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link color" href="/">About</a>
                      </li>
                      <li class="nav-item ">
                          <a class="nav-link color" href="/">Services</a>
                      </li>
                      <li class="nav-item  targeT">
                          <a class="nav-link color" href="/">FeedBack</a>
                      </li>
                  </ul>
                  <form class="d-flex">
                      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
                      <button class="btn  btn-style btn-style2" type="submit">Login</button>
                      {/* <button class="btn  btn-style btn-style2" type="submit">About</button> */}
                      <button class="btn  btn-style" type="submit">Signup</button>
                  </form>
              </div>
          </div>
      </nav>
  </section>
    );
}

export default Navbar;