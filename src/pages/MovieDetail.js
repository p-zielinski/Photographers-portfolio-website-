import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import { useState, useEffect } from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const url = useLocation().pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState();
  // Use Effect
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url
    )[0];
    setMovie(currentMovie);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          exit={"exit"}
          initial={"hidden"}
          animate={"show"}
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const HeadLine = styled.div`
  min-height: 90vh;
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
    height: 70vh;
    object-fit: cover;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 80%;
    background: #23d996;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award Component

export const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className={"line"}> </div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
