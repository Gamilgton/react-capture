import React from "react";
import Toggle from './Toggle';

//Styles
import {Faq} from '../styles/componentStyles';
// import styled from 'styled-components';
import {AnimateSharedLayout} from 'framer-motion';
import {appAnimation} from '../styles/animation';

import {useScroll} from './UseScroll';

const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <Faq
            ref={element}
            variants={appAnimation.scrollReveal}
            animate={controls}
            initial='hidden'
        >
            <h2>
                Any questions? <span>FAQ</span>
            </h2>

            <AnimateSharedLayout>
            <Toggle title='How do I start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur, dolor libero excepturi sapiente porro beatae vero ratione soluta nobis numquam recusandae aspernatur tempora corrupti, saepe doloremque quia? Delectus, neque!</p>
                    </div>
            </Toggle>

            <Toggle title='Daily Schedule'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur, dolor libero excepturi sapiente porro beatae vero ratione soluta nobis numquam recusandae aspernatur tempora corrupti, saepe doloremque quia? Delectus, neque!</p>
                </div>
            </Toggle>

            <Toggle title='Different payment methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur, dolor libero excepturi sapiente porro beatae vero ratione soluta nobis numquam recusandae aspernatur tempora corrupti, saepe doloremque quia? Delectus, neque!</p>
                </div>
            </Toggle>

            <Toggle title='What products do you offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur, dolor libero excepturi sapiente porro beatae vero ratione soluta nobis numquam recusandae aspernatur tempora corrupti, saepe doloremque quia? Delectus, neque!</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>

        </Faq>
    );
};

// const Faq = styled(About)`

//     display: block;

//     span {
//         display: block;
//     }

//     h2 {
//         padding-bottom: 2rem;
//         font-weight: lighter;
//     }

//     .faq-line {
//         background: #ccc;
//         height: 0.2rem;
//         margin: 2rem 0;
//         width: 100%;
//     }

//     .question {
//         padding: 2rem 0;
//         cursor: pointer;
//     }

//     .answer {
//         padding: 1rem 0;

//         p {
//             padding: 1rem 0;
//         }
//     }

// `;

export default FaqSection;