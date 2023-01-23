import React, { useCallback } from "react";
import { INewsStorage } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import "./NewsCard.css";

export interface INews {
  oneNews: INewsStorage;
}

const NewsCard: React.FC<INews> = ({ oneNews }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate(`/news/${oneNews.news_title}`),
    [navigate, oneNews.news_title]
  );

  return (
    <div className="news__card" key={oneNews.id}>
      <div className="news__card__block">
        <div onClick={handleClick} className="news__card__block-title">
          {oneNews.news_title}
        </div>
        <div onClick={handleClick} className="news__card__block-info">
          {oneNews.news_description}
        </div>
      </div>
      <div onClick={handleClick} className="news__card__preview">
        <img
          className="news__card__preview-img"
          src={oneNews.news_image}
          alt="img"
        />
        <div className="news__card__preview-date">{oneNews.news_date}</div>
      </div>
    </div>
  );
};

export { NewsCard };
