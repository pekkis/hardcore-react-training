import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export const useTime = (startTime: number) => {
  const [now, setNow] = useState(DateTime.fromMillis(startTime));

  useEffect(() => {
    const intervallos = setInterval(() => {
      setNow((current) => current.plus({ seconds: 1 }));
    }, 1000);

    // minun pitää palauttaa undefined tai cleanup-funkkari

    return () => {
      clearInterval(intervallos);
    };
  }, []);

  return now;
};

export default useTime;
