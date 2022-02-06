import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src="components/images/R.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                <right>
                    
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active">Home</Link>
                    </li>
                </ul>
                </right>
             </div>
        </nav>
    );
}

export default Navbar;