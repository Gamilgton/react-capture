import React from 'react';

// Framer Motion
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';

// Style ///////////
import {ContactStyle, Title, Hide, Circle, Social} from '../styles/pageStyles';
// import styled from 'styled-components';

const OurWork = () => {
    return (
        <ContactStyle
            variants={appAnimation.pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Title>
                <Hide>
                    <motion.h2>
                        Contact Us
                    </motion.h2>
                </Hide>
            </Title>

            <div>
                <Social>
                    <Circle/>
                    <h2>Send Us A Message</h2>
                    <h4><a href="mailto: andreykachar@gmail.com">andreykachar@gmail.com</a></h4>
                </Social>
            </div>
        </ContactStyle>        
    );
};

// const ContactStyle = styled(motion.div)`

//     /* width: 100%; */
//     height: 20%;
//     padding: 5rem 10rem;
//     color: #353535;
//     min-height: 90vh;

// `;

// const Title = styled(motion.div)`

//     background: #fff;
//     margin-bottom: 4rem;
//     color: black;

// `;

// const Hide = styled.div`

//     overflow: hidden;

// `;

// const Circle = styled.div`

//     border-radius: 50%;
//     width: 3rem;
//     height: 3rem;
//     background: #353535;

// `;

// const Social = styled(motion.div)`

//     display: flex;
//     align-items: center;

//     h2 {
//         margin: 2rem;
//     }

// `;

export default OurWork;