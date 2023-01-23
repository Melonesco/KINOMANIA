import React from "react";
import { IMonthsStorage, IYearsStorage } from "../../../types/types";
import { MonthsList } from "../../months/months-list/MonthsList";
import { YearCards } from "../../years/year-cards/YearCards";
import CrossIcon from "../../../images/icons/cross.ico";
import "./MovieSorting.css";

export interface IMovieSorting {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleClickApply: () => void;
  years: IYearsStorage[];
  setYear: React.Dispatch<React.SetStateAction<number>>;
  months: IMonthsStorage[];
  monthIndex: number[];
  setMonthIndex: React.Dispatch<React.SetStateAction<number[]>>;
  handleClickDelete: any;
}

const MovieSorting: React.FC<IMovieSorting> = ({
  searchValue,
  setSearchValue,
  handleClickApply,
  years,
  setYear,
  months,
  monthIndex,
  setMonthIndex,
  handleClickDelete,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="movie__sorting">
        <div className="movie__sorting-select">
          <p>Рік</p>
          <YearCards setYear={setYear} years={years} />
        </div>
        <label className="movie__sorting-search">
          <p>Пошук</p>
          <input type="text" value={searchValue} onChange={handleChange} />
        </label>
      </div>
      <div className="movie__sorting-checkbox">
        <p>Місяць</p>
        <MonthsList
          months={months}
          setMonthIndex={setMonthIndex}
          monthIndex={monthIndex}
        />
      </div>
      <div className="movie__sorting-btn">
        <button onClick={handleClickApply}>Застосувати</button>
        <button onClick={handleClickDelete}>
          <img src={CrossIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export { MovieSorting };
