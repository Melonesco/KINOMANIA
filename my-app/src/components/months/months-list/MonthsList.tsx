import React from "react";
import { IMonthsStorage } from "../../../types/types";
import { MonthsItem } from "../months-item/MonthsItem";
import "./MonthsList.css";

interface IMonthsList {
  months: IMonthsStorage[];
  monthIndex: number[];
  setMonthIndex: React.Dispatch<React.SetStateAction<number[]>>;
}

const MonthsList: React.FC<IMonthsList> = ({
  months,
  monthIndex,
  setMonthIndex,
}) => {
  const handleChangeMonth: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const month = +event.target.value;
    const isMonthCheck = event.target.checked;

    if (isMonthCheck && month) {
      setMonthIndex((prev: number[]) => [...prev, month]);
    } else {
      monthIndex.splice(
        monthIndex.findIndex((index: number) => index === month),
        1
      );
    }
  };

  return (
    <div className="months__list-input">
      {months.length > 0
        ? months.map((month: IMonthsStorage) => (
            <MonthsItem
              key={month.id}
              months={month}
              handleChangeMonth={handleChangeMonth}
            />
          ))
        : null}
    </div>
  );
};

export { MonthsList };
