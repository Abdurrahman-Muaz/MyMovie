import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({ movie }) => {
  const { watchlist, addMovieToWatchlist } = useContext(GlobalContext);

  const storedMovie = watchlist.find((o) => o.id === movie.id);
  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filter-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title"> {movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date
                ? movie.release_date.substring(0, 4)
                : "No Data"}
            </h4>

            <h4 className="release-date">
              IMBD: <b>{movie.vote_average ? movie.vote_average : "No Data"}</b>
            </h4>
          </div>

          <div className="controls">
            <button
              disabled={storedMovie}
              className="btn"
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
