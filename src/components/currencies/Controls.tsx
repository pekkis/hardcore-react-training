import { FC } from "react";

type Props = {
  date: string;
  changeDate: (date: string) => void;
};

export const Controls: FC<Props> = ({ date, changeDate }) => {
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          changeDate(e.target.value);
        }}
      />
    </div>
  );
};
