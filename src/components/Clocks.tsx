"use client";

import { FC, useEffect, useState } from "react";
import Clock from "./Clock";
import { DateTime } from "luxon";

type Props = {
  serverTime: string;
};

const Clocks: FC<Props> = ({ serverTime }) => {
  const [now, setNow] = useState<DateTime>(DateTime.fromISO(serverTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((current) => current.plus({ seconds: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // return cleanupFn || null
  }, []);

  return (
    <section>
      <Clock now={now} timezone="Europe/Helsinki" label="Helsinki" />
      <Clock now={now} timezone="America/New_York" label="New York" />
      <Clock now={now} timezone="Africa/Casablanca" label="Casablanca" />
    </section>
  );
};

export default Clocks;
