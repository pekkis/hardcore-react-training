import { DateTime } from "luxon";
import { FC } from "react";
import styles from "./Clock.module.css";

import cx from "clsx";

type Props = {
  time: DateTime;
  zone: string;
  darkMode?: boolean;
};

const Clock: FC<Props> = ({ time, zone, darkMode = false }) => {
  const classes = cx(styles.clock, {
    [styles.dark]: darkMode
  });

  return (
    <div className={classes}>
      <div>{zone}</div>
      <strong>
        {time.setZone(zone).toLocaleString(
          {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          },
          {
            locale: "fi"
          }
        )}
      </strong>
    </div>
  );
};

export default Clock;
