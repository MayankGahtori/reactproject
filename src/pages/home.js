import React from 'react';
import vmc from './inc/vmc';

function home(){
    return (
        <div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-12 text-dark">
                            <h4 className="main-heading">Home/About</h4>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 text-left"></div>
                        <h2>Vision and Mission</h2>
                        <p>
                        To make the world realize the full potential of what young innovators can do.
                        </p>
                    </div>
                </div>
            </section>
            <vmc />
        </div>
    );
}
export default home;