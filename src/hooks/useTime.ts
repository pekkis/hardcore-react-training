import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useTime = (startTime: string): DateTime => {
  const [current, setCurrent] = useState(DateTime.fromISO(startTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => previous.plus({ second: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return current;
};

export default useTime;
