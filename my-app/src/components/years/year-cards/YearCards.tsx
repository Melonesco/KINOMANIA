import React from "react";
import { IYearsStorage } from "../../../types/types";
import { YearCard } from "../year-card/YearCard";

interface IYearCards {
  years: IYearsStorage[];
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearCards: React.FC<IYearCards> = ({ years, setYear }) => {
  const selectYear: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setYear(event.target.value === "- - -" ? 0 : +event.target.value);
  };

  return (
    <select onChange={selectYear} name="select">
      <option value="0">- - -</option>
      {years.length > 0
        ? years.map((year: IYearsStorage) => (
            <YearCard key={year.id} year={year} />
          ))
        : null}
    </select>
  );
};

export { YearCards };
