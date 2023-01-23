import React, { useEffect, useState } from "react";
import {
  IMonthsStorage,
  IMovieStorage,
  IYearsStorage,
} from "../../../types/types";
import PrintIcon from "../../../images/icons/printer.ico";
import DownloadWhiteIcon from "../../../images/icons/download-to-storage-drive.ico";
import { MovieCards } from "../movie-cards/MovieCards";
import { MovieSorting } from "../movie-sorting/MovieSorting";
import "./MovieCatalog.css";

interface IMovies {
  movieStorage: IMovieStorage[];
}

const MovieCatalog: React.FC<IMovies> = ({ movieStorage }) => {
  const [movies, setMovies] = useState<IMovieStorage[]>(movieStorage);
  const [searchValue, setSearchValue] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [years, setYears] = useState<IYearsStorage[]>([]);
  const [months, setMonths] = useState<IMonthsStorage[]>([]);
  const [monthIndex, setMonthIndex] = useState<number[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/years")
      .then((res) => res.json())
      .then((data) => setYears(data));
    fetch("http://localhost:4000/api/months")
      .then((res) => res.json())
      .then((data) => setMonths(data));
  }, []);

  const handleClickApply = () => {
    setMovies(
      movieStorage
        .filter((movie: IMovieStorage) => {
          const isYearChosen = year ? movie.date_by_year === year : true;
          const isSearchValuePresent =
            searchValue.length > 0
              ? movie.ukrainian_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              : true;
          const isMonthsChosen =
            monthIndex.length > 0
              ? monthIndex.includes(movie.date_by_month)
              : true;

          return isYearChosen && isSearchValuePresent && isMonthsChosen;
        })
        .flat()
    );
  };

  const handleClickDelete = () => {
    setMovies(movieStorage);
    setSearchValue("");
    setYear(0);
    //setMonthIndex([]);
  };

  return (
    <div className="wrapper">
      <div className="movies">
        <div className="movies__content">
          <h2 className="movies__content-title">Фільми</h2>
          <div className="movies__content-links">
            <a
              href="http://kinomania.com.ua/print/movies"
              className="movies__content-block"
            >
              <img src={PrintIcon} alt="" />
              <p>Роздрукувати</p>
            </a>
            <a
              href="http://kinomania.com.ua/printpdf/5043"
              className="movies__content-block"
            >
              <img src={DownloadWhiteIcon} alt="" />
              <p>Репертуальний план</p>
            </a>
            <div className="movies__content-block">
              <p>Архів фільмів</p>
            </div>
          </div>
        </div>
        <MovieSorting
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleClickApply={handleClickApply}
          years={years}
          setYear={setYear}
          months={months}
          monthIndex={monthIndex}
          setMonthIndex={setMonthIndex}
          handleClickDelete={handleClickDelete}
        />
        <MovieCards movies={movies} />
      </div>
    </div>
  );
};

export { MovieCatalog };
