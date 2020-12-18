import React from 'react';

//Styles
import {Navigation} from '../styles';
// import styled from 'styled-components';

const Nav = () => {
    return (

        <Navigation>

            <h1>
                <a id="logo" href="#">Capture</a>
            </h1>

            <ul>
                <li>
                    <a href="#">1. Abut Us</a>
                </li>

                <li>
                    <a href="#">2. Our work</a>
                </li>

                <li>
                    <a href="#">3. Contact Us</a>
                </li>
            </ul>

        </Navigation>

    );
};

// const Navigation = styled.div`

//     min-height: 10vh;
//     display: flex;
//     margin: auto;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 5rem;
//     background: #23d997;
//     /* position: static; */

//     a {
//         color: white;
//         text-decoration: none;
//     }

//     ul {
//         display: flex;
//         list-style: none;
//     }

//     li {
//         padding-left: 10rem;
//         position: relative;
//     }

//     #logo {
//         font-size: 2rem;
//         font-family: 'Lobster', cursive;
//         font-weight: lighter;
//     }

// `;


export default Nav;