import { FC, memo } from "react";

type Props = {
  date: string;
  changeDate: (amount: number) => void;
};

const Controls: FC<Props> = ({ changeDate, date }) => {
  return (
    <div>
      <button
        onClick={() => {
          changeDate(-1);
        }}
      >
        &laquo;
      </button>
      <span>{date}</span>
      <button
        onClick={() => {
          changeDate(1);
        }}
      >
        &raquo;
      </button>
    </div>
  );
};

export default memo(Controls);
