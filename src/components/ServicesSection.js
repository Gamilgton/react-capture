import React from 'react';

// Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Styles
import {Services, Cards, Card, Description, Image} from '../styles';
// import styled from 'styled-components';


const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>high <span>quality</span> services</h2>

                <Cards>

                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="clock"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="clock"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock"/>
                            <h3>Afforable</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Card>

                </Cards>

            </Description>

            <Image>
                <img src={home2} alt="home2"/>
            </Image>

        </Services>
    )
}

// const Services = styled(About)`

//     h2 {
//         padding-bottom: 5rem;
//     }

//     p {
//         width: 70%;
//         padding: 2rem 0 4rem 0;
//     }

// `;

// const Cards = styled.div`

//     display: inline-block;
//     flex-wrap: wrap;

// `;

// const Card = styled.div`

//     flex-basis: 20rem;
//     .icon {
//         display: flex;
//         align-items: center;

//         h3 {
//             margin-left: 1rem;
//             background: white;
//             color: black;
//             padding: 1rem;
//         }
//     }

// `;

export default ServicesSection;