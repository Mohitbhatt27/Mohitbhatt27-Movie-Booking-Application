import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { searchMovie } from "../apis/omdb";

function Home() {
  const [movieList, setMovieList] = useState([]);

  async function downloadDefaultMovies(...args) {
    const urls = args.map((name) => searchMovie(name));
    const response = await axios.all(urls.map((url) => axios.get(url)));
    const movies = response.map((movieResponse) => movieResponse.data.Search);
    console.log([].concat(...movies));
    setMovieList([].concat(...movies));
  }

  // useEffect(() => {
  //   axios
  //     .get("https://dummyapi.io/data/v1/user", {
  //       headers: { "app-id": import.meta.env.VITE_APP_ID },
  //     })
  //     .then((response) => {
  //       const responseObject = response.data;
  //       setUsers([...responseObject.data]);
  //     });
  // }, []);

  useEffect(() => {
    downloadDefaultMovies("harry", "avengers", "batman");
  }, []);

  return (
    <>
      <div className="movie-card-wrapper">
        {movieList.length > 0 &&
          movieList.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)}
      </div>
    </>
  );
}

export default Home;
