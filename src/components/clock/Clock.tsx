"use client";

import { FC } from "react";
import { DateTime } from "luxon";
import * as styles from "./Clock.css";

import cx from "clsx";

type Props = {
  time: DateTime;
  zone: string;
  locale: string;
};

const Clock: FC<Props> = ({ time, zone, locale }) => {
  const local = time.setZone(zone).setLocale(locale);

  const isDaytime = local.hour >= 9 && local.hour <= 16;

  const classes = cx(styles.clock, {
    [styles.daytime]: isDaytime,
    [styles.nighttime]: !isDaytime
  });

  /*
  const classes2 = cx(
    styles.clock,
    isDaytime && styles.daytime,
    !isDaytime && styles.nighttime
  );
  */

  return (
    <div className={classes}>
      {local.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}
    </div>
  );
};

export default Clock;
