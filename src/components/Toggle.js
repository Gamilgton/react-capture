import React, {Children, useState} from 'react';
import {motion} from 'framer-motion';

const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);

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