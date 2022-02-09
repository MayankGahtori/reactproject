import React from 'react';
import Slider from '../inc/Slider';
import Slider2 from '../images/Slider2.jpg';
import Slider3 from '../images/Slider3.jpg';
import Slider4 from '../images/Slider4.jpg';
import Slider5 from '../images/Slider5.jpg';
import nilesh from '../images/nilesh.jpg';

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
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div class="text-center">
                            <img src={nilesh} class="img-circle" alt="cinque terre"/>
                            <h5>Nilesh Sinha</h5>
                            <h6>Chaiman</h6>
                            <p className="text">
                            With his 1st startup at an age of 14 years, Mr. Nilesh Sinha has an experience of working with many startups. 
                            As an E-governance and Financial Inclusion professional with years of experience in the ecosystem, especially 
                            in India, he is specialized in networking and communicating with institutions and authorities. Recipient of 3rd 
                            position in the International Innovation Fair 2017, Vizag, Mr. Sinha has been regularly invited as a guest speaker
                            and panelist for various corporate events and panel discussions. In his unique approach, he emphasizes on empowering
                            the innovators. He says that a true innovator can be anyone from any professional, geographical or other background.
                            In his version, a five-year-old kid practicing python to a 67 years old Colonel Sanders opening world’s most liked
                            chicken restaurant chain, every person with a unique approach or solution is an innovator. Also being a trained 
                            Hindustani Classical singer, Mr. Sinha promotes living a life with a balance among all the aspects of life including 
                            the professional commitments, paying proper attentions towards your hobbies to respecting your friends and family members. 
                            This is what he considers as his success mantra for wining many National level competitions and titles. He regularly writes 
                            blogs and articles based on the current startup and corporate ecosystem as well as on latest academic and technological trends
                            on global perspective (like: Blockchain, IoT, Big Data etc.) On his mission of Gamification of Innovation, he has so far been 
                            a guest speaker at 40+ schools, colleges and educational institutions impacting the life of more than Sixty thousand learners 
                            and innovators.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default Aboutus;