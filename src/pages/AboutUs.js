import React from "react";
import ScrollUp from "../components/ScrollUp";

// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import { motion } from "framer-motion";

//Import Animation
import {appAnimation} from '../styles/animation';

const AboutUs = () => {
    return (
        
        <motion.div
            variants={appAnimation.pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />

            <ScrollUp/>
        </motion.div>    
        
    );
}

export default AboutUs;