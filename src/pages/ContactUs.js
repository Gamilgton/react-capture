import React from 'react';

// Framer Motion
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';

const OurWork = () => {
    return (
        <motion.div
            variants={appAnimation.pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <h1>ContactUs</h1>
        </motion.div>        
    );
};

export default OurWork;