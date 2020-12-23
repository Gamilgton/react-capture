import React from 'react';
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';
import {Frame1, Frame2, Frame3, Frame4} from '../styles/pageStyles';

export const slider = () => {
    return (
        <motion.div
                variants={appAnimation.sliderContainer}
                initial='hidden'
                animate='show'
            >
                <Frame1 variants={appAnimation.sliderAnimation}></Frame1>
                <Frame2 variants={appAnimation.sliderAnimation}></Frame2>
                <Frame3 variants={appAnimation.sliderAnimation}></Frame3>
                <Frame4 variants={appAnimation.sliderAnimation}></Frame4>
            </motion.div>
    )
}