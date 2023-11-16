"use client";

import { DateTime } from "luxon";
import { FC } from "react";
// import styles from "./Clock.module.css";

import * as styles from "./Clock.css";

import cx from "clsx";

type Props = {
  currentTime: number;
  locale: string;
  zone: string;
};

export const Clock: FC<Props> = ({ currentTime, zone, locale }) => {
  const dt = DateTime.fromSeconds(currentTime).setLocale(locale).setZone(zone);

  const isNightTime = dt.hour <= 7 || dt.hour >= 17;

  const classes = cx(styles.clock, {
    [styles.nightTime]: isNightTime
  });

  return (
    <div className={classes}>
      <div>{zone}</div>
      <div>{dt.toLocaleString(DateTime.TIME_WITH_SECONDS)}</div>
    </div>
  );
};

export default Clock;
