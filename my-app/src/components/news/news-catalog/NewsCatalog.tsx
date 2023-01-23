import React, { useCallback, useEffect, useState } from "react";
import { INewsStorage } from "../../../types/types";
import { NewsCards } from "../news-cards/NewsCards";
import "./NewsCatalog.css";

const NewsCatalog: React.FC = () => {
  const [news, setNews] = useState<Array<INewsStorage>>([]);
  const [currentPage] = useState<number>(1);
  const [newsPerPage, setNewsPerPage] = useState<number>(6);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex);

  const handleClickButton = useCallback(
    () => setNewsPerPage((prev: number) => prev + newsPerPage),
    [newsPerPage]
  );

  return (
    <div className="wrapper">
      <div className="news__catalog">
        <h2 className="news__catalog-title">Новини</h2>
        <NewsCards currentNews={currentNews} />
        <div>
          {news.length > newsPerPage ? (
            <div onClick={handleClickButton} className="news__catalog-button">
              Показати ще
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { NewsCatalog };
