import React, { ChangeEvent } from "react";
import { IMonthsStorage } from "../../../types/types";
import "./MonthsItem.css";

interface IMonthsItem {
  months: IMonthsStorage;
  handleChangeMonth(event: ChangeEvent<HTMLInputElement>): void;
}

const MonthsItem: React.FC<IMonthsItem> = ({ months, handleChangeMonth }) => {
  return (
    <div onChange={handleChangeMonth} className="months__input-checkbox">
      <input
        type="checkbox"
        defaultChecked={false}
        value={months.id}
        id="month"
      />
      <label htmlFor="month">{months.month}</label>
    </div>
  );
};

export { MonthsItem };
