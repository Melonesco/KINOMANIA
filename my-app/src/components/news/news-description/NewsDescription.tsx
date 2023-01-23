import React, { useEffect, useMemo, useState } from "react";
import { INewsStorage } from "../../../types/types";
import { Link, useParams } from "react-router-dom";
import { NewsCards } from "../news-cards/NewsCards";
import { SocialLinks } from "../../social-links/SocialLinks";
import "./NewsDescription.css";

const NewsDescription: React.FC = () => {
  const [currentNewsDescription, setCurrentNewsDescription] =
    useState<INewsStorage | null>(null);
  const [newsList, setNewsList] = useState<INewsStorage[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, [id]);

  setTimeout(() => {
    setCurrentNewsDescription(
      newsList.filter((index: INewsStorage) => index.news_title === id)[0]
    );
  }, 0);

  const currentNews = useMemo(() => newsList.slice(0, 5), [newsList]);

  useMemo(() => {
    currentNews.splice(
      currentNews.findIndex((index: INewsStorage) => index.news_title === id),
      1
    );
  }, [currentNews, id]);

  return (
    <div className="wrapper">
      <div className="news__description">
        <h2 className="news__description-title">
          {currentNewsDescription?.news_title}
        </h2>
        <div className="news__description-block">
          <img
            className="news__description-img"
            src={currentNewsDescription?.news_image}
            alt=""
          />
          <div>{currentNewsDescription?.news_description}</div>
        </div>
        <SocialLinks />
        <div>
          <hr className="news__description-line" />
          <h2 className="news__description-link">
            <Link to="/news">Інші новини</Link>
          </h2>
          <NewsCards currentNews={currentNews} />
        </div>
      </div>
    </div>
  );
};

export { NewsDescription };
