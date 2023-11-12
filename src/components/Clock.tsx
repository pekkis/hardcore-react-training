import { DateTime } from "luxon";
import { FC } from "react";
import * as styles from "./Clock.css";
import cx from "clsx";

type Props = {
  time: DateTime;
  name: string;
  locale: string;
  zone: string;
};

const Clock: FC<Props> = ({ time, locale, zone, name }) => {
  const localized = time.setLocale(locale).setZone(zone);
  const classes = cx(styles.clock, {
    [styles.nightTime]: localized.hour <= 7 || localized.hour >= 17
  });

  return (
    <div className={classes}>
      <div>{name}</div>
      <div>{localized.toLocaleString(DateTime.TIME_WITH_SECONDS)}</div>
    </div>
  );
};

export default Clock;
