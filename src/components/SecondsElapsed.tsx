import { FC, useEffect, useState } from "react";
import { AppState } from "../services/store";

type Props = {
  secondsElapsed: number;
  increment: AppState["incrementSecondsElapsed"];
  intervalMillis?: number;
};

const SecondsElapsed: FC<Props> = ({
  secondsElapsed,
  increment,
  intervalMillis = 1000
}) => {
  useEffect(() => {
    console.log("SecondsEnabled :: Render!");

    const timeout = setInterval(() => {
      increment();
    }, intervalMillis);

    return () => {
      clearInterval(timeout);
    };
  }, [intervalMillis, increment]);

  return (
    <p>
      Sekunteja kulunut: <strong>{secondsElapsed}</strong>
    </p>
  );
};

export default SecondsElapsed;
