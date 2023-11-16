import { FC, useCallback, useEffect, useState } from "react";
import Button from "../duck-ui/Button";
import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";
import Input from "../duck-ui/Input";

type Props = {
  date: string;
  handleChange: (date: string) => void;
};

const Controls: FC<Props> = ({ date, handleChange }) => {
  const [x, setX] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      setX((px) => px + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  });

  const incrementer = useCallback(
    (step: number) => {
      const nextDate = DateTime.fromISO(date).plus({
        day: step
      });

      handleChange(nextDate.toFormat(YEAR_MONTH_DAY));
    },
    [date, handleChange]
  );

  return (
    <div>
      {x}

      <Button>Hellurei</Button>

      <Button
        name="prev"
        className="tussihovi"
        onClick={() => {
          incrementer(-1);
        }}
      >
        &laquo;
      </Button>
      <Input
        type="date"
        value={date}
        onChange={() => {
          incrementer(1);
        }}
      />
      <Button name="next" onClick={() => incrementer(1)}>
        &raquo;
      </Button>
    </div>
  );
};

export default Controls;
