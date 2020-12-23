// Styled component
import styled from 'styled-components';


export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
`;

export const Description = styled.div`
    z-index: 2;
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        /* z-index: 1; */
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

export const Services = styled(About)`

    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }

`;

// Cards Section /////////////////////////////////////
export const Cards = styled.div`

display: flex;
flex-wrap: wrap;

// service of cards
/* background-color: #3f0606; */

`;

export const Card = styled.div`

    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }

`;
//////////////////////////////////////////////////////


// FAQ Section ///////////////////////////////////////
export const Faq = styled(About)`

    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 2rem 0;
        cursor: pointer;
    }

    .answer {
        padding: 1rem 0;

        p {
            padding: 1rem 0;
        }
    }

`;
//////////////////////////////////////////////////////

// Navigation ////////////////////////////////////////

export const Navigation = styled.div`

    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background: #23d997;

a {
    color: white;
    text-decoration: none;
}

ul {
    display: flex;
    list-style: none;
}

li {
    padding-left: 10rem;
    position: relative;
}

#logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
}

`;
//////////////////////////////////////////////////////

// Wave //////////////////////////////////////////////
export const WaveSvg = styled.svg`

    position: absolute;
    left: 0;
    z-index: -1;

`;