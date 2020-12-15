import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">

                    <div className="hide">
                        <h3>We work to make a beauty</h3>
                    </div>

                    <div className="hide">
                        <h3>Your <span>dreams</span> come</h3>
                    </div>

                    <div className="hide">
                        <h3>true.</h3>
                    </div>

                </div>

                <p>
                    Contact us for any photography or videography ideas yuo have. We have professioanl aproach to implement yuor dreams in reality
                </p>

                <button>Contact us</button>

            </div>

            <img src={home1} alt="dude with a camera"/>
        </div>
    );
}

export default AboutSection;