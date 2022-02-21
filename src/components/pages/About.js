import React from 'react';
import Slider1 from '../images/Slider1.jpg';
import './App.css';

function Aboutus() {
    return(
        <div class="slider">
        <div id="Captions" class="slide" data-ride="carousel">
            <div class="inner">
                <div class="active">
                    <img src={Slider1}class="d-block w-100" alt="..."/>
                    <div class="caption">
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