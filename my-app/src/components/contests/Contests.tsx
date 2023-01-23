import React from "react";
import { Link } from "react-router-dom";
import KingsMen from "../../images/contests/kingsman_1x1_winpr_4.jpg";
import "./Contests.css";

const Contests: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="contests">
        <h2 className="contests-title">Конкурси</h2>
        <div className="contests__blocks">
          <Link className="contests__block" to="/">
            <img src={KingsMen} alt="" />
          </Link>
          <Link className="contests__block" to="/">
            <img src={KingsMen} alt="" />
          </Link>
          <Link className="contests__block" to="/">
            <img src={KingsMen} alt="" />
          </Link>
          <Link className="contests__block" to="/">
            <img src={KingsMen} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Contests };
