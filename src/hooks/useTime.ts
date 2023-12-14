import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useTime = (startTime: number): DateTime => {
  const [currentTime, setCurrentTime] = useState(
    DateTime.fromMillis(startTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((previous) => previous.plus({ seconds: 1 }));
      console.log("current time is set!");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
};

export default useTime;
