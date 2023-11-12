"use client";

import { FC } from "react";
import Clock from "./Clock";
import * as styles from "./Clocks.css";
import useTime from "@/hooks/useTime";

type Props = {
  serverTime: string;
};

const setup = [
  {
    zone: "America/Montreal",
    name: "Montreal",
    locale: "en-ca"
  },
  {
    zone: "Europe/London",
    name: "Lontoo",
    locale: "en-gb"
  },
  {
    zone: "Europe/Helsinki",
    name: "Helsinki",
    locale: "fi-fi"
  },
  {
    zone: "Asia/Tokyo",
    name: "Tokio",
    locale: "ja-jp"
  }
];

const Clocks: FC<Props> = ({ serverTime }) => {
  const time = useTime(serverTime);

  return (
    <div className={styles.clocks}>
      {setup.map((setup) => {
        return (
          <Clock
            key={setup.zone}
            time={time}
            locale={setup.locale}
            name={setup.name}
            zone={setup.zone}
          />
        );
      })}
    </div>
  );
};

export default Clocks;
