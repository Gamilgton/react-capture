import styled from 'styled-components';

export const appAnimation =  {

    container: {
        hidden: {
            x: -100,
        },
        show: {
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.35,
                // when: "afterChildren",
            },
        },
    },

    pageAnimation: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.25,
                // ease: "easeOut",
                // staggerChildren: 0.35,
                // when: "afterChildren",
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    },

    // Fade In
    fadeIn_1s: {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: { duration: 1}},
    },

    fadeIn_2s: {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: { duration: 2}},
    },

    fadeIn_3s: {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: { duration: 3}},
    },

    fadeIn_4s: {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: { duration: 4}},
    },
    ///////////////////////////////////////////////////

    // Fade Out
    fadeOut_1s: {
        hidden: {opacity: 1},
        show: {opacity: 0, transition: { duration: 1}},
    },


    ///////////////////////////////////////////////////

}