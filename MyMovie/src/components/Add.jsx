import React, { useContext, useState } from "react";
import ResultCart from "./ResultCart";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const { muaz } = useContext(GlobalContext);

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  async function onChange(e) {
    setQuery(e.target.value);

    fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=38dfe3b86e28a6e65dc4734e4b33b84a&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>Search to add millions of movies or TV series.</h2>
            <h1>{muaz}</h1>
          </div>

          <div className="input-wrapper">
            <input
              value={query}
              type="text"
              placeholder="Search for movies or TV series..."
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.original_title}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
