import { FC } from "react";
import { DateTime } from "luxon";

import * as styles from "./Clock.css";

import cx from "clsx";

type Props = {
  now: DateTime;
  timezone: string;
  label: string;
};

const Clock: FC<Props> = ({ now, timezone, label }) => {
  const localTime = now.setZone(timezone);

  const classes = cx(styles.clock, {
    [styles.nightTime]: localTime.hour > 0 && localTime.hour < 7
  });

  return (
    <div className={classes}>
      <div>{label}</div>
      <div>
        {localTime.setLocale("fi").toLocaleString({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  );
};

export default Clock;
