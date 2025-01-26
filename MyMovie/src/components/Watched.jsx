import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched</h1>
          </div>

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watched" />
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

export default Watched;
