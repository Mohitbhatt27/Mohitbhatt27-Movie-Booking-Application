import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  const navigator = useNavigate();

  const handleOnClick = (imdbID) => {
    navigator(`/movie/${imdbID}`);
  };
  return (
    <div onClick={(e) => handleOnClick(imdbID)} className="movie-wrapper">
      <div className="movie-image">
        <img src={Poster} />
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
