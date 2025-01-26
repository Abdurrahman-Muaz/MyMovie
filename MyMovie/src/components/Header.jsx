import React from "react";
import { Link, Links } from "react-router-dom";
import Watchlist from "./Watchlist";
import Watched from "./Watched";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>Things to Watch</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link className="btn" to={"/add"}>
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
