"use client";

import { FC, useState, useEffect } from "react";
import Clock from "./Clock";
import useTime from "@/hooks/useTime";

export type ClockConfiguration = {
  zone: string;
  locale: string;
};

type Props = {
  time: number;
  clocks: ClockConfiguration[];
};

/*
function Clocks2(props: Props): JSX.Element {
  const { time, clocks } = props;

  return <div>hellurei</div>;
}
*/

// const tussi = (x) => x + 5;

const Clocks: FC<Props> = ({ clocks, time }) => {
  const current = useTime(time);

  return (
    <div>
      {clocks.map((config) => {
        return (
          <Clock
            key={config.zone}
            zone={config.zone}
            locale={config.locale}
            time={current}
          />
        );
      })}
    </div>
  );
};

export default Clocks;
