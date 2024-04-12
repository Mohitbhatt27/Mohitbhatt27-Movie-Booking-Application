import { useEffect, useState } from "react";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "./MovieDetails.css";
import "@smastrom/react-rating/style.css";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function downloadMovies() {
    const response = await axios.get(searchMovieById(id));
    setMovie(response.data);
  }

  useEffect(() => {
    downloadMovies();

    /*mimicing a possible error during API calls so as to check the error boundary
    const random = Math.random();
    if (random > 0.5) {
      throw "error";
    }*/
  }, [id]);

  return (
    <>
      <div className="movie-details-wrapper">
        {movie && (
          <MovieCard
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
            Type={movie.Type}
            Poster={movie.Poster}
          />
        )}

        {movie && (
          <div className="movie-details">
            <div>Plot: {movie.Plot}</div>
            <div>Actors: {movie.Actors}</div>
            <div>
              Genre:{" "}
              {movie.Genre.split(",").map((genre) => {
                return (
                  <span className="genre" key={genre}>
                    {genre}
                  </span>
                );
              })}
            </div>
            <div>
              <Rating items={10} value={Math.floor(movie.imdbRating)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieDetails;
