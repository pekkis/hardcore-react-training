import { FC } from "react";
import { DateTime } from "luxon";
import * as styles from "./Clock.css";
import cx from "clsx";

type Props = {
  locale?: string;
  timezone: string;
  time: EpochTimeStamp;
};

export const Clock: FC<Props> = ({ locale = "en-US", timezone, time }) => {
  const dt = DateTime.fromMillis(time).setZone(timezone).setLocale(locale);

  const isBusinessHours = dt.hour >= 9 && dt.hour < 17;

  const classes = cx(styles.clock, !isBusinessHours && styles.afterDark);

  /*
  const classes2 = cx(styles.clock, {
    [styles.afterHours]: !isBusinessHours
  });
  */

  return (
    <div className={classes}>
      {dt.toLocaleString(DateTime.TIME_WITH_SECONDS)}
    </div>
  );
};

// export default Clock;

// export function Clockkendaal(): JSX.Element {}
