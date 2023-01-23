import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { movieStorage } from "./storage/storage";
import { App } from "./App";
import { Contests } from "./components/contests/Contests";
import { MovieCatalog } from "./components/movies/movie-catalog/MovieCatalog";
import { MovieDescription } from "./components/movies/movie-description/MovieDescription";
import { Footer } from "./components/footer/Footer";
import { Contacts } from "./components/contacts/Contacts";
import Documents from "./components/documents/Documents";
import { NewsCatalog } from "./components/news/news-catalog/NewsCatalog";
import { NewsDescription } from "./components/news/news-description/NewsDescription";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contests" element={<Contests />} />
        <Route
          path="/movies"
          element={<MovieCatalog movieStorage={movieStorage} />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDescription movieStorage={movieStorage} />}
        />
        <Route path="/pro-nas" element={<Contacts />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/news" element={<NewsCatalog />} />
        <Route path="/news/:id" element={<NewsDescription />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
