import React from "react";
import { IMovieStorage } from "../../../types/types";
import { MovieCard } from "../movie-card/MovieCard";
import "./MovieCards.css";

interface IMovies {
  movies: IMovieStorage[];
}

const MovieCards: React.FC<IMovies> = ({ movies }) => {
  return (
    <div className="movie__cards">
      {movies.length > 0
        ? movies.map((movie: IMovieStorage) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        : null}
    </div>
  );
};

export { MovieCards };
