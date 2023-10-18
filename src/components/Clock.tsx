import { DateTime } from "luxon";
import { FC } from "react";
import * as styles from "./Clock.css";

type Props = {
  now: DateTime;
  title: string;
  zone: string;
  locale: string;
};

const Clock: FC<Props> = ({ now, title, zone, locale }) => {
  // const now = useTime(initialDate);

  return (
    <div className={styles.clock}>
      <div>{title}</div>

      <div>
        {now
          .setZone(zone)
          .setLocale(locale)
          .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
      </div>
    </div>
  );
};

export default Clock;
