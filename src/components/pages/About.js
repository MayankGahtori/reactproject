import React from 'react';
import Slider from '../inc/Slider';
import Slider2 from '../images/Slider2.jpg';
import Slider3 from '../images/Slider3.jpg';
import Slider4 from '../images/Slider4.jpg';
import Slider5 from '../images/Slider5.jpg';
import Slider6 from '../images/Slider6.jpg';
import Slider7 from '../images/Slider7.jpg';
import Slider8 from '../images/Slider8.jpg';
import Slider9 from '../images/Slider9.jpg';
import Slider10 from '../images/Slider10.jpg';
import Slider11 from '../images/Slider11.jpg';
import Slider12 from '../images/Slider12.jpg';
import Slider13 from '../images/Slider13.jpg';
import Slider14 from '../images/Slider14.jpg';
import nilesh from '../images/nilesh.jpg';
import geetika from '../images/geetika.jpg';
import priyanka from '../images/priyanka.jpg';
import Sailesh from '../images/Sailesh.jpg';
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
                            <h1 className="main-heading">What we do?</h1>
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
                        <img src={Slider3} className="img" alt="Avatar" />
                            <div class="card-body">
                                <h5 class="main-heading">Global Approach</h5>
                                <p class="text">
                                CGI is a global accelerator that provides a<br />
                                nurturing holistic environment for startups
                                to attain their maximum potential. A platform supporting all kinds of business,
                                technical, scientific, agricultural,<br/> 
                                educational and what not.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src={Slider4} class="img" alt="Avatar"/>
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
                        <img src={Slider5} class="img" alt="Avatar"/>
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
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <img src={nilesh} className="rounded float-start" alt="Avatar"/>
                        <div class="card-body">
                            <h5>Nilesh Sinha</h5>
                            <h6>Chairman</h6>
                            <p class="text-center-left">
                            With his 1st startup at an age of 14 years, Mr. Nilesh Sinha has an experience of working with many
                            startups. As an E-governance and Financial Inclusion professional with years of experience in the 
                            ecosystem, especially in India, he is specialized in networking and communicating with institutions 
                            and authorities. Recipient of 3rd position in the International Innovation Fair 2017, Vizag, Mr. Sinha 
                            has been regularly invited as a guest speaker and panelist for various corporate events and panel discussions. 
                            In his unique approach, he emphasizes on empowering the innovators. He says that a true innovator can be anyone 
                            from any professional, geographical or other background.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={geetika} className="rounded float-start" alt="..."/>
                        <div class="card-body">
                            <h5>Er.Geetika Pandey</h5>
                            <h6>President</h6>
                            <p class="text-center-left">
                            Completed Btech-CSE in the year 2016 and has the vibrant experience in IT field. 
                            Also has 3+ years’ experience in corporate world. Her goal is to hold a Senior 
                            Corporate position along with being a Philanthropist. She had a very sound 
                            communication and Technical skills and regularly participate as an invited/guest 
                            delegate in many IT Conclave, Summit and Sessions organized by FICCI, CII, ASSOCHAM, 
                            ICC etc. Experienced Software Engineer with a demonstrated history of working in 
                            Computer Software Industry, she has also completed her MBA in Business Analytics 
                            and Human Resource in the year 2020. As far as the Analytical expertise is concerned, 
                            she is good in data collection, preparation and cleansing and working on a software like 
                            Watson, Cognos, SPSS and Google Analytics. Er. Geetika Pandey is also the Co-Founder and 
                            HOD (IT Departt.), SewaPoint.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
            <center>
                <h1 className="main-heading">Innovators</h1>
            </center>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" text-center-left>
                            <h2 class="h2">Council of Innovators</h2>
                            <p className="text">
                                <img src={Slider6} className="imgs" alt="Avatar" />
                                Meet our Innovators
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div class="text-center">
                            <img src={nilesh} className="img" alt="Avatar"/>
                            <h5>Nilesh Sinha</h5>
                            
                            <p className="text">
                            Mr. Nilesh Sinha is an E-governance and Financial Inclusion professional with years of experience in the \
                            ecosystem, specially in India and Asia Pacific. Specialized in networking and communicating with institutions 
                            and authorities and recipient of 3rd position in the International Innovation Fair 2017, Vizag.
                            </p>
                            <img src={geetika} className="img" alt="Avatar"/>
                            <h5>Er. Geetika Pandey</h5>
                            <p className="text">
                            A Technology enthusiast, Er. Geetika Pandey was one of the top scorers of her city during matriculation examination. 
                            Consistently being exceptionally well in academia, her core competency lies in the strong domain knowledge. 
                            Apart from studies, she is extremely friendly as well as amaible in nature and has well handles the onboarding 
                            and operational process of CGI at such a young age. She is also one of the few founding members of CGI
                            </p>
                            <img src={priyanka} className="img" alt="Avatar"/>
                            <h5>Priyanka Pandey</h5>
                            <p className="text">
                            She evaluates her nature of work and on the off chance that she is not fulfilled again she gets to her expertise until to nature of work.
                            CGI is platform where all innovators are meet and she is the one of them. Priyanka is a womentrepreneur with vision , 
                            mission and lessons to grow with CGI.
                            </p>
                            <img src={Sailesh} className="img" alt="Avatar"/>
                            <h5>Sailesh Sinha</h5>
                            <p className="text">
                            A mechanical engineering graduate. Has interest in teaching and public policy. When not doing that you can find him going through all kinds of 
                            tech news. A former competitive debator, he loves reading didactic and academic literature. Has worked with the district administration for the 
                            implementation of digital India and raising awareness about digital transactions. Has worked with various government agencies and District 
                            Administration departments in spreading education to the underprivileged.
                            </p>
                        </div>
                    </div>
                </div>  
            </section>
            <center>
                <h1 className="main-heading">Partner And Associates</h1>
            </center>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" text-center-left>
                            <h2 class="h2">Partners and Associates</h2>
                            <img src={Slider7} className="imgs" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div class="text-left">
                        <h4 className="main-heading">Chandigarh University</h4>
                            <p className="text">
                                <img src={Slider8} className="slider" alt="..." />
                               
                                Since its inception Chandigarh University has aimed to improve employment opportunities 
                                for the people and to support the community by providing access to relevant applied knowledge. 
                                A unique platform that facilitates students and peers to the process of product development, 
                                business development and entrepreneurship
                            </p>
                            
                        </div>
                        <div class="text-right"> 
                        <br/>
                        <br/>
                        <h4 className="main-heading">Sewapoint</h4>
                        <p className="text">
                        <img src={Slider9} className="image" alt="..." />
                        Technology company which is based on Information Technology enabled Services. 
                        It mainly involves<br/> delivering mandatory Government and Banking services to the 
                        Bottom of the Pyramid, particularly<br/> in the rural areas.
                        </p>
                        </div>
                        <div class="text-left"> 
                        <h4 className="main-heading">CU - TBI</h4>
                        <p className="text">
                        <img src={Slider10} className="sli" alt="..." />
                        Technology Business Incubator is an innovative platform offering mentorship and financial<br/>
                        support to passionate individuals aspiring to be entrepreneurs. TBI is accelerating the<br/>
                        development of young entrepreneurial start-ups from early to mid-stage entrepreneurial<br/>
                        development. TBI supports and facilitate selected innovative ideas across all disciplines to<br/>
                        turn them into valuable business propositions.
                        </p>
                        </div>
                        <div class="text-right"> 
                        <h4 className="main-heading">Smart Solution Technology (SSTech)</h4>
                        <p className="text">
                        <img src={Slider11} className="image" alt="..." />
                        It is a IT company which provides all the all kinds of OEM services to boost your ecosystem web 
                        dev/app dev/machine learning /data sci projects with latest technology and frame works.They also 
                        provide services for latest emerging technology like Internet of Things, Cloud Computing to help 
                        you get started in the IT industry.      
                        </p>
                        </div>
                        <div class="text-left"> 
                        <h4 className="main-heading">Harpal News</h4>
                        <p className="text">
                        <img src={Slider12} className="sli" alt="..." />
                        Harpal News is a technology website which not only focuses on the emerging technologies 
                        but also tries to bring a change in people’s life by updating them with events and some 
                        best resources so that the youth of our country can be updated. With every phase of our 
                        life, we tend to stand at divergence, what to choose, and what not? So at Harpal News, 
                        we try to bring the best decisions of your life on your tips. Just login to our application 
                        or website or any of our social pages and boom you are into the world of knowledge, updated 
                        and upgraded. Every time you log in, you will see the best and rare technologies, which have 
                        been compromised or suppressed under our daily schedules.
                        </p>
                        </div>
                        <div class="text-right">
                            <br/>
                            <br/>
                            <h4 className="main-heading">CUEats</h4>
                            <p className="text">
                                <img src={Slider13} className="image" alt=""/>
                                IA food delivery startup for campuses. Get hot fresh food deivered directly to your hostel doorstep. 
                                Partnering with all the canteens in the campus, they make sure to give you delicious perfectly 
                                cooked meal from your choice of canteen directly at your doorstep with 0 additional charges.
                            </p>
                        </div>
                        <div class="text-left">
                            <br/>
                            <br/>
                            <h4 className="main-heading">CompareSathi</h4>
                            <p class="text">
                            <img src={Slider14} className="sli" alt=""/>
                            <br/>
                            <br/>
                            Comparesathi is a rapidly growing company.It is an advanced product search engine to search for products 
                            and compare them from different websites i.e Amazon, Flipkart, snapdeal, jaboong, myntra...and many more. 
                            We have also tied up with these brands to provide you cashback on every purchase you make through us.
                            </p>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    );
}
export default Aboutus;