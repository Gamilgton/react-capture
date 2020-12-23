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
            // scale: 1.5,
        },
        show: {
            opacity: 1,
            // scale: 1,
            transition: {
                duration: 0.25,
                // ease: "easeOut",
                // staggerChildren: 0.35,
                // when: "afterChildren",
            },
        },
        exit: {
            opacity: 0,
            // scale: 1.5,
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

    // Photo Animation
    photoAnimation: {
        hidden: {
            scale: 1.5,
            opacyti: 0,
        },

        show: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.5
            }
        },
        exit: {
            scale: 5,
            opacyti: 0,
        }
    },

    // Line Animation
    lineAnimation: {
        hidden: {
            width: '0%',
        },

        show: {
            width: '100%',
            transition: {
                duration: 1.5,
            },
        },
    },
    ///////////////////////////////////////////////////

    // Slider Animation

    sliderContainer: {
        hidden: {
            opacity: 0.5,
        },

        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                ease: 'easeOut',
            }
        }
    },

    sliderAnimation: {
        hidden: {
            x: '-130%',
            skew: '-45deg',
        },

        show: {
            x: '130%',
            skew: '-45deg',
            transition: {
                ease: 'easeOut',
                duration: 0.75
            },
        },
    },
    ///////////////////////////////////////////////////
    


};