import { useEffect, useState } from "react";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function downloadMovies() {
    const response = await axios.get(searchMovieById(id));
    setMovie(response.data);
  }

  useEffect(() => {
    downloadMovies();
  }, []);

  return (
    <>
      {movie && (
        <MovieCard
          Title={movie.Title}
          Year={movie.Year}
          imdbID={movie.imdbID}
          Type={movie.Type}
          Poster={movie.Poster}
        />
      )}
    </>
  );
}

export default MovieDetails;
