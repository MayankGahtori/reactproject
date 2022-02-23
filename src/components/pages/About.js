import React from 'react';
import Slider1 from '../images/Slider1.jpg'
import Slider2 from '../images/Slider2.jpg'
import Slider3 from '../images/Slider3.jpg'
import Slider4 from '../images/Slider4.jpg'
function Aboutus() {
    return(
      <section className="section">
                <div className="container">
                    <div className="row">
                        <div class="text-right">
                            <h1 className="main-heading">Who Are We?</h1>
                            <p className="text">
                                <img src={Slider1} className="image" alt="..." />
                                The Confederation of Global Innovators (also known as CGI) 
                                is a platform created for the demographic dividend of our
                                nation. We strongly believe that today our countryâ€™s
                                youth, which comprises more than 65% of the total
                                population, is the biggest asset for our country. From the 
                                point of inception, the CGI, as a community, has worked
                                tirelessly in the field of bridging the gap between the
                                stakeholders of development (like students, professional
                                aspirants etc) and the opportunities like the corporate
                                housesThe CGI is created to serve as a platform to connect
                                innovators, stakeholders of development and the student
                                community.ðŸ˜Š
                            </p>
                        </div>
                    </div>
                </div>
                <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" text-left>
                            <h1 className="main-heading">Why CGI?</h1>
                        </div>
                    </div>
                    <div class="card-group">
                        <div class="card">
                        <img src={Slider2} className="img" alt="..." />
                            <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div class="card">
                        <img src={Slider3} className="image" alt="..." />
                            <div class="card-body">
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="card">
                    <img src={Slider4} className="image" alt="..." />
                        <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
   
                    </div>
                </div>
            </div>
            </section>
        </section>
            
            
    );
}
export default Aboutus;