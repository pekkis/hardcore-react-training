import { YEAR_MONTH_DAY } from "@/services/date";
import { DateTime } from "luxon";
import { FC } from "react";
import Button from "../duck-ui/Button";
import Input from "../duck-ui/Input";

type Props = {
  currentDate: string;
  changeDate: (nextDate: string) => void;
};

const Controls: FC<Props> = ({ currentDate, changeDate }) => {
  const changeTheDate = (amount: number) => {
    console.log("AMOUNT", amount);

    const tomorrow = DateTime.fromISO(currentDate).plus({ days: amount });
    changeDate(tomorrow.toFormat(YEAR_MONTH_DAY));
  };

  return (
    <div>
      <Button
        onClick={() => {
          console.log("What the hell?");

          changeTheDate(-1);
        }}
      >
        &laquo;
      </Button>
      <Input
        type="date"
        value={currentDate}
        onChange={(e) => {
          if (!e.target.value) {
            return;
          }

          changeDate(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          changeTheDate(1);
        }}
      >
        &raquo;
      </Button>
    </div>
  );
};

export default Controls;
