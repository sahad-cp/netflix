import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        setMovie(Response.data.results[2]);
      });
  }, []);

  return (
    <div 
    style={{backgroundImage:`url( ${movie ? movie.backdrop_path : ""})`}}
    className="banner">
      <div className="content">
        <h1 className="title">{movie ? imageUrl+movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">
         {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
