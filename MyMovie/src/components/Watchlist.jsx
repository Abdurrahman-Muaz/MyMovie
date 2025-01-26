import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Movies to Watch</h1>
          </div>

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">There is no movie on your list...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
