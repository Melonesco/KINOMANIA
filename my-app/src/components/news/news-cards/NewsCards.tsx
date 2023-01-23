import React from "react";
import { INewsStorage } from "../../../types/types";
import { NewsCard } from "../news-card/NewsCard";
import "./NewsCards.css";

export interface INews {
  currentNews: INewsStorage[];
}

const NewsCards: React.FC<INews> = ({ currentNews }) => {
  return (
    <div className="news__cards">
      {currentNews.length > 0 ? (
        currentNews.map((oneNews: INewsStorage) => (
          <NewsCard key={oneNews.id} oneNews={oneNews} />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export { NewsCards };
