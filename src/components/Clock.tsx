import { FC } from "react";
import { DateTime } from "luxon";

import * as styles from "./Clock.css";

import cx from "clsx";

type Props = {
  time: number;
  zone: string;
  locale?: string;
};

const Clock: FC<Props> = ({ time, zone, locale = "fi" }) => {
  const dt = DateTime.fromSeconds(time).setLocale(locale).setZone(zone);

  // is it day or is it nite?

  const isBusinessHours = dt.hour >= 8 && dt.hour <= 15;

  const classes = cx(styles.clock, {
    [styles.nightTime]: !isBusinessHours
  });

  return (
    <div className={classes}>
      kello on {dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
    </div>
  );
};

export default Clock;
