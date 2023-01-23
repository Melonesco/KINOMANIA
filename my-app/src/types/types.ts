export interface IMovieStorage {
  id: number;
  ukrainian_name: string;
  english_name: string;
  date_by_day: number;
  date_by_month: number;
  date_by_year: number;
  format?: string;
  country?: string;
  studio: string;
  duration: string;
  genre: string;
  director: string;
  actors: string;
  composer?: string;
  description: string;
  image: string;
  trailer: string;
  materials: string;
  PDF: string;
}

export interface INewsStorage {
  id: number;
  news_title: string;
  news_image: string;
  news_description: string;
  news_date: string;
}

export interface IMonthsStorage {
  id: number;
  month: string;
}

export interface IYearsStorage {
  id: number;
  year: number | string;
}
