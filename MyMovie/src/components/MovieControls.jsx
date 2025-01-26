// filepath: /C:/Users/cebel/Desktop/MyMovie/src/components/MovieControls.jsx
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="  inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye" id="goz"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times" id="carpi"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash" id="goz"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times" id="carpi"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
