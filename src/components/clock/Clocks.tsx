"use client";

import { FC } from "react";
import Clock from "./Clock";
import useTime from "@/hooks/useTime";

type Props = {
  serverTime: number;
};

const clockConfigs = [
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
    locale: "fi-FI"
  },
  {
    zone: "Asia/Seoul",
    locale: "ko-kr"
  }
];

const Clocks: FC<Props> = ({ serverTime }) => {
  const time = useTime(serverTime);

  return (
    <div>
      {clockConfigs.map((cc) => {
        return (
          <Clock key={cc.zone} time={time} zone={cc.zone} locale={cc.locale} />
        );
      })}
    </div>
  );
};

export default Clocks;
