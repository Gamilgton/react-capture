import React from 'react';
import home1 from '../img/home1.png';

// Styled
import styled from 'styled-components';


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">

                    <HIde>
                        <h2>We work to make a beauty</h2>
                    </HIde>

                    <HIde>
                        <h2>Your <span>dreams</span> come</h2>
                    </HIde>

                    <HIde>
                        <h2>true.</h2>
                    </HIde>

                </div>

                <p>
                    Contact us for any photography or videography ideas yuo have. We have professioanl aproach to implement yuor dreams in reality
                </p>

                <button>Contact us</button>

            </Description>

            <Image>
                <img src={home1} alt="dude with a camera"/>
            </Image>
            
        </About>
    );
}

// Styled component

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const HIde = styled.div`
    overflow: hidden;
`;

export default AboutSection;