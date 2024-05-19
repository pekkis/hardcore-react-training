import { YEAR_MONTH_DAY } from "@/services/date";
import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  date: DateTime;
  changeDate: (date: DateTime) => void;
};

const Controls: FC<Props> = ({ date, changeDate }) => {
  const dateStr = date.toFormat(YEAR_MONTH_DAY);
  return (
    <div>
      <button
        onClick={() => {
          changeDate(date.plus({ days: -1 }));
        }}
      >
        &laquo;
      </button>
      <input
        type="date"
        value={dateStr}
        onChange={(e) => {
          console.log("DATE CHANGE", e.target.value);

          const dt = DateTime.fromISO(e.target.value);

          if (!dt.isValid) {
            return;
          }

          changeDate(dt);
        }}
      />
      <button
        onClick={() => {
          changeDate(date.plus({ days: 1 }));
        }}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Controls;
