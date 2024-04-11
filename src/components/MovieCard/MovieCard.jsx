import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactSVG from '../../assets/react.svg';


function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  const navigator = useNavigate();

  const handleOnClick = (imdbID) => {
    navigator(`/movie/${imdbID}`);
  };
  return (
    <div onClick={(e) => handleOnClick(imdbID)} className="movie-wrapper">
      <div className="movie-image">
        <LazyLoadImage src={Poster} key={imdbID} placeholderSrc = {ReactSVG}/>
      </div>
      <div className="movie-title">
        <span>{Title}</span>
      </div>
      <div className="movie-year">
        <span>Released in: {Year}</span>
      </div>
      <div className="movie-type">
        <span>Type: {Type}</span>
      </div>
    </div>
  );
}

export default MovieCard;
