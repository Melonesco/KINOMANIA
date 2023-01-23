import React, { useEffect, useState } from "react";
import { IMovieStorage } from "../../../types/types";
import { useParams } from "react-router-dom";
import DownloadIcon from "../../../images/icons/download.ico";
import { SocialLinks } from "../../social-links/SocialLinks";
import "./MovieDescription.css";

interface IMovies {
  movieStorage: IMovieStorage[];
}

const MovieDescription: React.FC<IMovies> = ({ movieStorage }) => {
  const [value, setValue] = useState<IMovieStorage | null>(null);
  const { id } = useParams();

  useEffect(
    () =>
      setValue(
        movieStorage.filter((el: IMovieStorage) => el.english_name === id)[0]
      ),
    [id, movieStorage]
  );

  return (
    <div className="wrapper">
      <div className="movie">
        <div className="movie__title">
          <div>{value?.ukrainian_name}</div>
          <div>{value?.english_name}</div>
        </div>
        <div className="movie__materials">
          <a href={value?.materials} target="_blank" rel="noreferrer">
            <img src={DownloadIcon} alt="img" />
            <p>Матеріали до фільму</p>
          </a>
          <a href={value?.PDF}>
            <img src={DownloadIcon} alt="img" />
            <p>PDF</p>
          </a>
        </div>
        <div className="movie__content">
          <img src={value?.image} alt="img" />
          <div>
            {value?.date_by_year ? (
              <div>
                <b>Дата старту: </b>
                <span>
                  {value.date_by_day < 10
                    ? "0" + value.date_by_day
                    : value.date_by_day}
                  .
                </span>
                <span>
                  {value.date_by_month < 10
                    ? "0" + value.date_by_month
                    : value.date_by_month}
                  .
                </span>
                <span>{value?.date_by_year}</span>
              </div>
            ) : null}
            {value?.format ? (
              <div>
                <b>Формат: </b>
                {value.format}
              </div>
            ) : null}
            {value?.country ? (
              <div>
                <b>Країна: </b>
                {value?.country}
              </div>
            ) : null}
            {value?.studio ? (
              <div>
                <b>Студії: </b>
                {value?.studio}
              </div>
            ) : null}
            {value?.duration ? (
              <div>
                <b>Тривалість: </b>
                {value?.duration}
              </div>
            ) : null}
            {value?.genre ? (
              <div>
                <b>Жанр: </b>
                {value?.genre}
              </div>
            ) : null}
            {value?.director ? (
              <div>
                <b>Режисер: </b>
                {value?.director}
              </div>
            ) : null}
            {value?.actors ? (
              <div>
                <b>Актори: </b>
                {value?.actors}
              </div>
            ) : null}
            {value?.composer ? (
              <div>
                <b>Композитор: </b>
                {value?.composer}
              </div>
            ) : null}
            {value?.description ? (
              <div className="movie__content-description">
                {value?.description}
              </div>
            ) : null}
          </div>
        </div>
        <div className="movie__content-trailer">
          <iframe
            width="100%"
            height="550px"
            src={value?.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export { MovieDescription };
