import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  currentDate: string;
  filter: string;
  changeDate: (date: string) => void;
  changeFilter: (filter: string) => void;
};

export const Controls: FC<Props> = ({
  currentDate,
  changeDate,
  filter,
  changeFilter
}) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => changeFilter(e.target.value)}
      />

      <input
        type="date"
        value={currentDate}
        onChange={(e) => {
          if (!e.target.value) {
            return;
          }

          const dt = DateTime.fromISO(e.target.value);
          if (!dt.isValid) {
            return;
          }

          changeDate(e.target.value);
        }}
      />
    </div>
  );
};
