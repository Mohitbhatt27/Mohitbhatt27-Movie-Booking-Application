import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";

function Home() {
  const movie = {
    Title: "Shaitaan",
    Year: "2024",
    imdbID: "tt27744786",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjczYjQ3ZTMtMDAwZi00Y2I2LWE2MTMtOGUyM2YyMThmYTFiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  };
  return (
    <>
      <div className="movie-card-wrapper">
        <MovieCard {...movie} />
        <MovieCard {...movie} />
        <MovieCard {...movie} />
      </div>
    </>
  );
}

export default Home;
