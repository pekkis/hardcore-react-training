"use client";

import { FC } from "react";
import { Clock } from "@/components/clock/Clock";
import { useTime } from "@/hooks/useTime";

type Props = {
  now: number;
  data: {
    timezone: string;
    locale: string;
  }[];
};

export const Clocks: FC<Props> = ({ now, data }) => {
  const currentTime = useTime(now);
  return (
    <div>
      {data.map((d) => {
        return (
          <Clock
            key={d.timezone}
            timezone={d.timezone}
            locale={d.locale}
            time={currentTime}
          />
        );
      })}
    </div>
  );
};
