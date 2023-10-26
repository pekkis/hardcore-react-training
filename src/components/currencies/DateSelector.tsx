import { YEAR_MONTH_DAY } from "@/services/date";
import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  currentDate: DateTime;
  changeDate: (nextDate: DateTime) => void;
};

const DateSelector: FC<Props> = ({ currentDate, changeDate }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeDate(currentDate.minus({ days: 1 }));
        }}
      >
        &laquo;
      </button>
      <input
        type="date"
        value={currentDate.toFormat(YEAR_MONTH_DAY)}
        onChange={(e) => {
          console.log("DATE CHANGE", e.target.value);
          changeDate(DateTime.fromISO(e.target.value));
        }}
      />
      <button
        onClick={() => {
          changeDate(currentDate.plus({ days: 1 }));
        }}
      >
        &raquo;
      </button>
    </div>
  );
};

export default DateSelector;
