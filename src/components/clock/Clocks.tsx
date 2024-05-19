"use client";

import useTime from "@/hooks/useTime";
import { FC } from "react";
import Clock from "./Clock";

type ClockConfig = {
  zone: string;
  locale: string;
};

const configs: ClockConfig[] = [
  {
    locale: "en-US",
    zone: "America/New_York"
  },
  {
    locale: "en-GB",
    zone: "Europe/London"
  },
  {
    locale: "fi-FI",
    zone: "Europe/Helsinki"
  },
  {
    locale: "ja-JP",
    zone: "Asia/Tokyo"
  }
];

type Props = {
  serverTime: number;
};

const Clocks: FC<Props> = ({ serverTime }) => {
  const now = useTime(serverTime);

  return (
    <div>
      {configs.map((config) => {
        return (
          <Clock
            key={config.zone}
            zone={config.zone}
            time={now}
            locale={config.locale}
          />
        );
      })}
    </div>
  );
};

export default Clocks;
