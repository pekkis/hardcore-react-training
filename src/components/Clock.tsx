import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  time: DateTime;
  name: string;
  locale: string;
  zone: string;
};

const Clock: FC<Props> = ({ time, locale, zone, name }) => {
  return (
    <div>
      <div>{name}</div>
      <div>
        {time
          .setLocale(locale)
          .setZone(zone)
          .toLocaleString(DateTime.TIME_WITH_SECONDS)}
      </div>
    </div>
  );
};

export default Clock;
