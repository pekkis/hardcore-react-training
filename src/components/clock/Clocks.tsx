"use client";

import { FC } from "react";
import Clock from "./Clock";
import useTime from "@/hooks/useTime";

type Props = {
  serverTime: string;
};

const clocks = [
  {
    locale: "en-US",
    timezone: "America/New_York"
  },
  {
    locale: "en-GB",
    timezone: "Europe/London"
  },
  {
    locale: "fi-FI",
    timezone: "Europe/Helsinki"
  },
  {
    locale: "ko-KR",
    timezone: "Asia/Seoul"
  }
];

const Clocks: FC<Props> = ({ serverTime }) => {
  const time = useTime(serverTime);
  return (
    <>
      {clocks.map((clockData) => {
        return (
          <Clock
            key={clockData.timezone}
            time={time}
            locale={clockData.locale}
            timezone={clockData.timezone}
          />
        );
      })}
    </>
  );
};

export default Clocks;
