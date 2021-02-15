import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Episode from "../Episode";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function EpisodePage() {
  const url = "https://rickandmortyapi.com/api/episode/";
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}?page=${page}&name=${search}`)
      .then((response) => {
        setInfo(response.data.info);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, page]);

  const nextHandler = (event) => {
    event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
      window.scrollTo(0, 330);
    } else {
      setPage(1);
      window.scrollTo(0, 330);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 330);
    } else {
      setPage(info.pages);
      window.scrollTo(0, 330);
    }
  };

  return (
    <>
      <div className="header-box">
        <div id="header">
          <Link to="/">
            <h1 id="logo">Rickypedia</h1>
          </Link>
          <p className="subtext"> The Rick and Morty Encyclopedia</p>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            value={search}
            placeholder=""
            type="text"
          />

          <div className="nav-buttons">
            <Link to="/characters">
              <button
                type="button"
                className="buttons"
                onClick={() => {
                  setPage(1);
                }}
              >
                Characters
              </button>
            </Link>
            <Link to="/episodes">
              <button
                type="button"
                className="buttons"
                onClick={() => {
                  setPage(1);
                }}
              >
                Episodes
              </button>
            </Link>
          </div>
        </div>
        <img
          className="search-gif"
          src="./images/search/morty-arm (1).png"
          alt="mort-arm"
        />
      </div>

      <div id="content-box">
        {results.map((result, index) => (
          <Episode key={index} result={result} />
        ))}
      </div>

      <div className="pagination">
        <button className="page-button" onClick={(event) => prevHandler(event)}>
          <i className="bx bxs-minus-square"></i>
        </button>
        <span>
          {page}/{info.pages}
        </span>
        <button className="page-button" onClick={(event) => nextHandler(event)}>
          <i className="bx bxs-plus-square"></i>
        </button>
      </div>
    </>
  );
}
