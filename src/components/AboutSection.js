import React from 'react';
import home1 from '../img/home1.png';

// Styled
// import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">

                    <Hide>
                        <h2>We work to make a beauty</h2>
                    </Hide>

                    <Hide>
                        <h2>Your <span>dreams</span> come</h2>
                    </Hide>

                    <Hide>
                        <h2>true.</h2>
                    </Hide>

                </div>

                <p>
                    Contact us for any photography or videography ideas yuo have. We have professioanl aproach to implement yuor dreams in reality
                </p>

                <button>Contact us</button>

            </Description>

            <Image>
                <img src={home1} alt="dude with a camera"/>
            </Image>
            
        </About>
    );
}


export default AboutSection;