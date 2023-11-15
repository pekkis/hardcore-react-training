"use client";

import { FC } from "react";
import Clock from "./Clock";
import useTime from "@/hooks/useTime";

type Clock = {
  zone: string;
  locale: string;
};

const clocks: Clock[] = [
  {
    zone: "America/New_York",
    locale: "en-us"
  },
  {
    zone: "Europe/London",
    locale: "en-gb"
  },
  {
    zone: "Europe/Helsinki",
    locale: "fi-fi"
  },
  {
    zone: "Asia/Tokyo",
    locale: "ja-jp"
  }
];

type Props = {
  serverTime: number;
};

const Clocks: FC<Props> = ({ serverTime }) => {
  const currentTime = useTime(serverTime);
  return (
    <div>
      {clocks.map((clock) => {
        return (
          <Clock
            key={clock.zone}
            currentTime={currentTime}
            locale={clock.locale}
            zone={clock.zone}
          />
        );
      })}
    </div>
  );
};

export default Clocks;
