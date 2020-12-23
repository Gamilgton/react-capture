import React from 'react';
import home1 from '../img/home1.png';

// Styled
// import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles/componentStyles';

// Framer Motion
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';
import Wave from './Wave';


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div
                    className="title"
                    variants={appAnimation.container}
                    initial="hidden"
                    animate="show"
                >

                    <Hide>
                        <motion.h2 
                            variants={appAnimation.fadeIn_1s}
                            // initial="hidden"
                            // animate="show"
                        >
                            We work to make a beauty
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2
                            variants={appAnimation.fadeIn_1s}
                            // initial="hidden"
                            // animate="show"
                        >
                            Your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2
                            variants={appAnimation.fadeIn_1s}
                            // initial="hidden"
                            // animate="show"
                        >
                            true.
                        </motion.h2>
                    </Hide>

                </motion.div>

                <p>
                    Contact us for any photography or videography ideas yuo have. We have professioanl aproach to implement yuor dreams in reality
                </p>

                <button>Contact us</button>

            </Description>

            <Image>
                <motion.img variants={appAnimation.photoAnimation} src={home1} alt="dude with a camera"/>
            </Image>

            <Wave />
            
        </About>
    );
}


export default AboutSection;