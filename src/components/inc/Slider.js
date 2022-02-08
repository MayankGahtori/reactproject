import React from 'react';
import Slider1 from '../images/Slider1.png';
function Slider(){
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slider1} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    );
}

export default Slider;