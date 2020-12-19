import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Work = styled(motion.div)`

min-height: 100vh;
overflow: hidden;
padding: 5rem;

h2 {
    color: white;
    padding: 1rem 0;
}

`;


export const Movie = styled.div`

    padding-bottom: 5rem;

    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }

`;

export const Details = styled(motion.div)`

    color: white;

`;

export const HeadLine = styled.div`

    min-height: 90hv;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`;

export const Awards = styled.div`

    min-height: 80vh;
    display: inline-flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;

`;

export const AwardStyle = styled.div`

    padding: 5rem;

    h3 {
        font-size: 1.5rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }

    p {
        padding: 2rem 0;
    }

`;

export const ImageDisplay = styled.div`

    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

`;