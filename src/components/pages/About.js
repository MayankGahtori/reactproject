import React from 'react';
import Slider1 from '../images/Slider1.jpg'
function Aboutus() {
    return(
      <div className="section">
  <div className="container">
    <div className="card-body">
      <img src={Slider1} class="img" alt="..."/>
    </div>
    <div className="col-md-9">
      <div className="row">
        <h5 className="page-heading">Who Are We?</h5>
        <p className="text">
        The Confederation of Global Innovators (also known as CGI) is a platform created<br/>
        for the demographic dividend of our nation. We strongly believe that today our country’s youth, which comprises more than 65% of the total population, is the biggest asset for our country. From the point of inception, the CGI, as a community, has worked tirelessly in the field of bridging the gap between the stakeholders of development (like students, professional aspirants etc) and the opportunities like the corporate houses. The CGI is created to serve as a platform to connect innovators, stakeholders of development and the student community.
        </p>
        
      </div>
    </div>
  </div>
</div>
    );
}
export default Aboutus;