import React from "react";
import { Link } from "react-router-dom";
import { IMovieStorage } from "../../../types/types";
import "./MovieCard.css";

const MovieCard: React.FC<IMovieStorage> = (movie: IMovieStorage) => {
  return (
    <Link to={movie.english_name} className="movies__card">
      <img src={movie.image} alt="img" />
      <div className="movies__card-name">{movie.ukrainian_name}</div>
    </Link>
  );
};

export { MovieCard };
