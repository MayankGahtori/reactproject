import React from 'react';
import Slider from '../inc/Slider';
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
                            The Confederation of Global Innovators (also known as CGI)<br/> 
                            is a platform created for the demographic dividend of our<br/> 
                            nation. We strongly believe that today our countryâ€™s<br/>
                            youth, which comprises more than 65% of the total<br/> 
                            population, is the biggest asset for our country. From the<br/> 
                            point of inception, the CGI, as a community, has worked<br/>
                            tirelessly in the field of bridging the gap between the <br/>
                            stakeholders of development (like students, professional<br/>
                            aspirants etc) and the opportunities like the corporate<br/>
                            housesThe CGI is created to serve as a platform to connect<br/>
                            innovators, stakeholders of development and the student<br/>
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