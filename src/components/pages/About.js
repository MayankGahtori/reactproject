import React from 'react';
import Slider1 from '../components/images/Slider1.jpg';

function Aboutus() {
    return(
        <div class="main-slider">
        <div id="formaSliderCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slider1}class="d-block w-100" alt="..."/>
                    <div class="carousel-caption">
                        <div class="row row-eq-height">
                            <div class="col-md-8 mt-5">
                                <h5>Do you want to learn?</h5>
                                <p>Connecting for <em>Contributing</em>
                                    Interacting for <span>Innovating</span></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}
export default Aboutus;