import React from 'react';

//Styles
import {Navigation} from '../styles';
// import styled from 'styled-components';

// Router
import {Link} from 'react-router-dom';

const Nav = () => {
    return (

        <Navigation>

            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>

            <ul>
                <li>
                    <Link to="/">1. Abut Us</Link>
                </li>

                <li>
                    <Link to="/work">2. Our work</Link>
                </li>

                <li>
                    <Link to="/contact">3. Contact Us</Link>
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