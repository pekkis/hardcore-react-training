import { DateTime } from "luxon";
import { FC } from "react";

import * as styles from "./Clock.css";

import cx from "clsx";

type Props = {
  time: DateTime;
  locale?: string;
  zone?: string;
};

const Clock: FC<Props> = ({
  time,
  locale = "fi",
  zone = "Europe/Helsinki"
}) => {
  const localTime = time.setLocale(locale).setZone(zone);

  // todo: abstract away
  const isNightTime = localTime.hour >= 17 || localTime.hour <= 7;

  const classes = cx(styles.clock, isNightTime && styles.nightTime);

  /*
  const classes2 = cx(styles.clock, {
    [styles.nightTime]: isNightTime
  });
  */

  return (
    <div className={classes}>
      Time: {localTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
    </div>
  );
};

export default Clock;
