import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

export default function Landing() {
  return (
    <>
      <div id="landing-body"></div>
      <div className="banner">
        <div className="banner-heading">
          <Link to="/">
            <h1 className="website-name">Rickypedia</h1>
          </Link>
          <p className="sub-heading"> The Rick and Morty Encyclopedia</p>
        </div>

        <div className="search-options">
          <Link to="/characters">
            <div className="option">
              <img
                src="./rickypedia/images/landing/characters.jpg"
                className="landing-images"
                alt="characters"
              />
              <div className="option-heading">Characters</div>
            </div>
          </Link>
          <Link to="/episodes">
            <div className="option">
              <img
                src="./rickypedia/images/landing/episodes.jpg"
                className="landing-images"
                alt="episodes"
              />
              <div className="option-heading">Episodes</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
