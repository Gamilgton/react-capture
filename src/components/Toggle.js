import React, {Children, useState} from 'react';
import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';

const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(true);

    return (

        <motion.div
            className='question'
            onClick={()=> setToggle(!toggle)}
            layout
        >

            <motion.div className="h4" layout>{title}</motion.div>
            {toggle ? children : ""}
            <div className="faq-line"></div>

        </motion.div>

    )

};

export default Toggle;