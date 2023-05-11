"use client";

import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import Clock from "./Clock";
import * as styles from "./Clocks.css";

type Props = {
  now: string;
  zones: {
    title: string;
    zone: string;
    locale: string;
  }[];
};

const Clocks: FC<Props> = ({ now, zones }) => {
  const [time, setTime] = useState<DateTime>(DateTime.fromISO(now));
  useEffect(() => {
    setInterval(() => {
      setTime((currentTime) => currentTime.plus({ seconds: 1 }));
    }, 1000);
  }, []);

  return (
    <section className={styles.flexxer}>
      {zones.map((zone) => {
        return (
          <div key={zone.title} className={styles.item}>
            <div>{zone.title}</div>
            <div>
              <Clock
                key={zone.title}
                now={time}
                zone={zone.zone}
                locale={zone.locale}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Clocks;
