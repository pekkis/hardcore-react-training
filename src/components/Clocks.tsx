"use client";

import { FC, useState, useEffect } from "react";
import Clock from "./Clock";

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
  const [current, setCurrent] = useState(time);

  useEffect(() => {
    console.log("HIP HEI JOKA RENDERÖINNILLÄ");
  });

  useEffect(() => {
    console.log("HIP HEI CURRENT", current);
  }, [current]);

  useEffect(() => {
    console.log("HIP HEI VAIN KUN MIKÄÄN EI KOSKAAN MUUTU");

    const interval = setInterval(() => {
      console.log("I AM CHANGING!!!!");
      setCurrent((prev) => prev + 1);
    }, 1000);

    // return undefined;

    return () => {
      clearInterval(interval);
    };
  }, []);

  // no side effects
  // setTime(555);

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
