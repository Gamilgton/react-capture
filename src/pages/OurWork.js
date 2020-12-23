import React from 'react';

// Styles
// import styled from 'styled-components';
import {Work, Movie, Frame1, Frame2, Frame3, Frame4} from '../styles/pageStyles';

// Framer Motion
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';
import {useScroll} from '../components/UseScroll';

// Router
import {Link} from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Work
            variants={appAnimation.pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {/* <motion.div
                variants={appAnimation.sliderContainer}
                initial='hidden'
                animate='show'
            >
                <Frame1 variants={appAnimation.sliderAnimation}></Frame1>
                <Frame2 variants={appAnimation.sliderAnimation}></Frame2>
                <Frame3 variants={appAnimation.sliderAnimation}></Frame3>
                <Frame4 variants={appAnimation.sliderAnimation}></Frame4>
            </motion.div> */}

            <Movie>
                <h2>The Athlete</h2>
                <motion.div
                    className="line"
                    variants={appAnimation.lineAnimation}
                ></motion.div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>

            <Movie
                ref={element}
                variants={appAnimation.scrollReveal}
                animate={controls}
                initial='hidden'
            >
                <h2>The Racer</h2>
                <motion.div
                    className="line"
                    variants={appAnimation.lineAnimation}
                ></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer"/>
                </Link>
                
            </Movie>

            <Movie
                ref={element2}
                variants={appAnimation.scrollReveal}
                animate={controls2}
                initial='hidden'
            >
                <h2>Good Times</h2>
                <motion.div
                    className="line"
                    variants={appAnimation.lineAnimation}
                ></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
                
            </Movie>
        </Work>        
    );
};

// const Work = styled.div`

//     min-height: 100vh;
//     overflow: hidden;
//     padding: 5rem;

//     h2 {
//         color: white;
//         padding: 1rem 0;
//     }

// `;

// const Movie = styled.div`

//     padding-bottom: 5rem;

//     .line {
//         height: 0.5rem;
//         background: #ccc;
//         margin-bottom: 3rem;
//     }

//     img {
//             width: 100%;
//             height: 80vh;
//             object-fit: cover;
//         }

// `;

export default OurWork;