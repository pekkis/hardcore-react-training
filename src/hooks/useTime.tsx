import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useTime = (startTime: string) => {
  const [now, setNow] = useState(DateTime.fromISO(startTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((n) => n.plus({ seconds: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return now;
};

export default useTime;
