import React from 'react';
import Slider from '../inc/Slider';
import Slider2 from '../images/Slider2.jpg';
import Slider3 from '../images/Slider3.jpg';
import Slider4 from '../images/Slider4.jpg';
import Slider5 from '../images/Slider5.jpg';

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
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" text-left>
                            <h1 className="main-heading">Why CGI?</h1>
                            <div className="underline"></div>
                            <p className="text">
                            CGI is a structured network of startups that facilitates Founders to network with other Entrepreneurs, Mentors, Investors, Job Seekers and Professionals. 
                            The key to the success of all startups under us are the offerings we bring. 
                            Being the biggest innovation accelerator we provide all our members with multiple premium services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                        <img src={Slider3} className="images" alt="cinque terre" />
                            <div class="card-body">
                                <h5 class="main-heading">Global Approach</h5>
                                <p class="text">
                                CGI is a global accelerator that provides a<br />
                                nurturing holistic environment for startups<br/> 
                                to attain their maximum potential. A platform supporting all kinds of business,<br/> 
                                technical, scientific, agricultural,<br/> 
                                educational and what not.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={Slider4} class="images" alt="..."/>
                            <div class="card-body">
                                <h5 class="main-heading">Unlimited Opportunities</h5>
                                <p class="text">
                                From seed funding to mentoring to growth hacking. CGI offers all services so you donâ€™t lack behind when itâ€™s the time to touch great heights.
                                 Our worldwide corporate connections help you generate business leads for your startup.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={Slider5} class="images" alt="..."/>
                            <div class="card-body">
                                <h5 class="main-heading">Networks</h5>
                                <p class="text">
                                Entrepreneurs, mentors or investors, CGI has a global approach to back you up. With our around the world network, 
                                we help you build your personal connections as well to grow your business..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <center>
                <h1 className="main-heading">Management</h1>
            </center>
        </div>
    );
}

export default Aboutus;