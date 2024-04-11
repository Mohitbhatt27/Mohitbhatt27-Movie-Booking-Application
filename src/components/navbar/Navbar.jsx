// React and related imports
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom hooks
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";

// Context
import ThemeContext from "../../context/ThemeContext";

// External libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// CSS
import "./Navbar.css";

function Navbar() {
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);

  const navigator = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  function handleAutoCompleteClick(e, movieImdbId) {
    navigator(`/movie/${movieImdbId}`);
  }

  function handleToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("app-theme", "dark");
    }

    else{
      setTheme("light");
      localStorage.setItem("app-theme", "light");
    }
  }


  const MovieTitle = ({ title }) => {
    const wordToStyle = searchTerm;
    const words = title.split(" ");
    console.log (wordToStyle);
  
    return (
      <div>
        {words.map((word, index) => (
          <span key={index} className={(word.toUpperCase() == wordToStyle.toUpperCase()) ? "styled-word" : "actual-auto"}>
            {word + " "}
          </span>
        ))}
      </div>
    );
  };
  

  return (
    <div className="navbar-wrapper">
      <div className="movie-base-title">
        {" "}
        <Link to="/"> Movie Base </Link>
      </div>
      <div className="search-bar">
        <input
          id="movie-search-input"
          type="text"
          onFocus={() => {
            setIsAutoCompleteVisible(true);
          }}
          onBlur={(e) => {
            setIsAutoCompleteVisible(false);
          }}
          onChange={useDebounce((e) => setSearchTerm(e.target.value))}
          placeholder="what movie you are thinking about..."
        />

        <div
          id="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          <div className="autocomplete-result">
            Autocomplete results...{searchTerm}
          </div>

          {movieList.length > 0 &&
            movieList.map((movie) => (
              <div
                onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                key={movie.imdbID}
                className="autocomplete-result"
              >
                <MovieTitle title={movie.Title} />
              </div>
            ))}
        </div>
      </div>
      <div onClick={handleToggleTheme}>
        <FontAwesomeIcon
          className="theme-icon"
          icon={theme == "light" ? faMoon : faSun}
        />
      </div>
    </div>
  );
}

export default Navbar;
