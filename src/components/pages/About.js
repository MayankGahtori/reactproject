import React from 'react';
import Slider1 from '../images/Slider1.jpg'
import Slider2 from '../images/Slider2.jpg'
import Slider3 from '../images/Slider3.jpg'
import Slider4 from '../images/Slider4.jpg'
import Slider5 from '../images/Slider5.jpg'
import Slider6 from '../images/Slider6.jpg'
import Slider7 from '../images/Slider7.jpg'
import Slider8 from '../images/Slider8.jpg'
import Slider9 from '../images/Slider9.jpg'
import nilesh from '../images/nilesh.jpg'
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
                    <div className="row">
                        <div className="col-md-4">
                        <img src={Slider2} className="img" alt="..." />
                        <p className="text">
                            Diverse and upgraded environment
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider3} className="img" alt="..." />
                        <p className="text">
                            Global networking opportunities
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider4} className="img" alt="..." />
                        <p className="text">
                            Particaption in worldwide event
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider5} className="img" alt="..." />
                        <p className="text">
                           Knowledge about technicalities and regulation
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider6} className="img" alt="..." />
                        <p className="text">
                           Organizing seminar and workshops
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider7} className="img" alt="..." />
                        <p className="text">
                           Interaction with influential personalities
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider8} className="img" alt="..." />
                        <p className="text">
                            Interaction with sponsors and associates
                        </p>
                        </div>
                        <div className="col-md-4">
                        <img src={Slider9} className="img" alt="..." />
                        <p className="text">
                            Sustainable growth and development
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <center>
                <h1 className="main-heading">Managment</h1>
            </center>
            <section className="section">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-sm-9">
                        <p className="text">
                        With his 1st startup at an age of 14 years, Mr. Nilesh Sinha has an experience of working with many startups. As an E-governance and Financial Inclusion professional with years of experience in the ecosystem, especially in India, he is specialized in networking and communicating with institutions and authorities. Recipient of 3rd position in the International Innovation Fair 2017, Vizag, Mr. Sinha has been regularly invited as a guest speaker and panelist for various corporate events and panel discussions. In his unique approach, he emphasizes on empowering the innovators. He says that a true innovator can be anyone from any professional, geographical or other background. In his version, a five-year-old kid practicing python to a 67 years old Colonel Sanders opening world’s most liked chicken restaurant chain, every person with a unique approach or solution is an innovator. Also being a trained Hindustani Classical singer, Mr. Sinha promotes living a life with a balance among all the aspects of life including the professional commitments, paying proper attentions towards your hobbies to respecting your friends and family members. This is what he considers as his success mantra for wining many National level competitions and titles. He regularly writes blogs and articles based on the current startup and corporate ecosystem as well as on latest academic and technological trends on global perspective (like: Blockchain, IoT, Big Data etc.) On his mission of Gamification of Innovation, he has so far been a guest speaker at 40+ schools, colleges and educational institutions impacting the life of more than Sixty thousand learners and innovators.
                        </p>
                        <div className="images">
                           
                            <span className="person-image mb-2">
                                <img src={nilesh} alt="srcset"/>
                            </span>
                            <p className="personName">Nilesh Sinha</p>
                            <p className="g">Chairman</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>  
    );
}
export default Aboutus;