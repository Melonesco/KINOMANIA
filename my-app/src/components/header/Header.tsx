import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo/logo_kinomania.png";
import Search from "../../images/icons/search.ico";
import Avatar from "../../images/icons/avatar.ico";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate("/"), [navigate]);

  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__inner">
          <img
            onClick={handleClick}
            className="header__logo"
            src={Logo}
            alt=""
          />
          <nav className="header__nav">
            <Link to="/movies">Фільми</Link>
            <Link to="/news">Новини</Link>
            <a href="http://ftp.kinomania.com.ua:5000/fsdownload/WNLgY5p5I/For%20Cinema">
              Матеріали
            </a>
            <Link to="/contests">Конкурси</Link>
            <Link to="/documents">Документи</Link>
            <Link to="/pro-nas">Про нас</Link>
          </nav>
          <div className="header__icons">
            <img src={Search} alt="" />
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
