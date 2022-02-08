import React from 'react';
import Slider from '../inc/Slider';
import Slider2 from '../images/Slider2.jpg';
function Aboutus() {
    return(
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" text-left>
                            <h1 className="main-heading">Who Are We?</h1>
                            <div className="underline"></div>
                            <p className="text">
                                <img src={Slider2} className="image" alt="..." />
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
            </section>
        </div>
    );
}

export default Aboutus;