import React, {useState, useEffect} from 'react';

// import styled from 'styled-components';
import {Details, Awards, AwardStyle, ImageDisplay, HeadLine} from '../styles/pageStyles';
// Framer Motion
// import {motion} from 'framer-motion';
import {appAnimation} from '../styles/animation';

import {useHistory} from 'react-router-dom';
import { MovieState } from '../movieState';


const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // Use Effect
    useEffect(()=> {
        const currentMovie = movies.filter((stateMovie)=> stateMovie.url === url);
        setMovie(currentMovie[0]);

        // console.log("URL =          " + url);

    // console.log("Movie State:   " + movie.mainImage);

    }, [movies, url]);
    
    

    return (
        <>

        {movie && (

            <Details
                variants={appAnimation.pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <HeadLine>

                    <h2>{movie.title}</h2>
                    <img src={movie.mainImage} alt={toString(movie.title)}/>
                </HeadLine>

                <Awards>
                    {movie.awards.map((award)=> (
                        <Award
                            title={award.title}
                            description={award.description}
                            key={award.title}
                        />))}
                </Awards>

                <ImageDisplay>
                <img src={movie.secondaryImage} alt={toString(movie.title)}/>
                </ImageDisplay>        

            </Details>
        
        )}

        </>
    );
};


// Award component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
//////////////////////



// const Details = styled.div`

//     color: white;

// `;

// const HeadLine = styled.div`

//     min-height: 90hv;
//     padding-top: 20vh;
//     position: relative;

//     h2 {
//         position: absolute;
//         top: 10%;
//         left: 50%;
//         transform: translate(-50%, -10%);
//     }

//     img {
//         width: 100%;
//         height: 50vh;
//         object-fit: cover;
//     }
// `;

// const Awards = styled.div`

//     min-height: 80vh;
//     display: inline-flex;
//     margin: 5rem 10rem;
//     align-items: center;
//     justify-content: space-around;

// `;

// const AwardStyle = styled.div`

//     padding: 5rem;

//     h3 {
//         font-size: 1.5rem;
//     }

//     .line {
//         width: 100%;
//         background: #23d997;
//         height: 0.5rem;
//         margin: 1rem 0;
//     }

//     p {
//         padding: 2rem 0;
//     }

// `;

// const ImageDisplay = styled.div`

//     min-height: 50vh;
//     img {
//         width: 100%;
//         height: 100vh;
//         object-fit: cover;
//     }

// `;




export default MovieDetail;