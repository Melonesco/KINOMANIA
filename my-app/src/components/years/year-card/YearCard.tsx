import React from "react";
import { IYearsStorage } from "../../../types/types";

interface IYearCard {
  year: IYearsStorage;
}

const YearCard: React.FC<IYearCard> = ({ year }) => {
  return <option value={year.year}>{year.year}</option>;
};

export { YearCard };
