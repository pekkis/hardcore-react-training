"use client";

import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  now: DateTime;
  zone?: string;
  locale?: string;
};

const Clock: FC<Props> = ({ now, zone = "Europe/Helsinki", locale = "fi" }) => {
  return (
    <div>
      {now.setZone(zone).setLocale(locale).toLocaleString({
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })}
    </div>
  );
};

export default Clock;
