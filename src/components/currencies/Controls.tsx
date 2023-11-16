import { FC } from "react";

type Props = {
  date: string;
  handleChange: (date: string) => void;
};

const Controls: FC<Props> = ({ date, handleChange }) => {
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          const newDate = e.target.value;

          if (!newDate) {
            return;
          }

          handleChange(newDate);
        }}
      />
    </div>
  );
};

export default Controls;
