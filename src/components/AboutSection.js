import React from 'react';
import home1 from '../img/home1.png';

// Styled
// import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles/componentStyles';

// Framer Motion
import {motion} from 'framer-motion';


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">

                    <Hide>
                        <motion.h2 
                            animate={{opacity: 1,
                                transition: { duration: 1.3}}}
                            initial={{opacity: 0}}
                        >
                            We work to make a beauty
                        </motion.h2>
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