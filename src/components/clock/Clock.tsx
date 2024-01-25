import { DateTime } from "luxon";
import { FC } from "react";
import * as styles from "./Clock.css";
import cx from "clsx";

console.log(styles, "stails");

type Props = {
  time: DateTime;
  timezone?: string;
  locale?: string;
};

const Clock: FC<Props> = ({
  time,
  timezone = "Europe/Helsinki",
  locale = "fi-FI"
}) => {
  const dt = time.setLocale(locale).setZone(timezone);

  const isNighttime = dt.hour >= 17 || dt.hour <= 8;

  const classes = cx(styles.clock, isNighttime && styles.nightTime);

  return (
    <div className={classes}>
      {dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
    </div>
  );
};

export default Clock;
