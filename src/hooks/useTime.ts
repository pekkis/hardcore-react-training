import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useTime = (initialDate: string) => {
  const [now, setNow] = useState(
    DateTime.fromISO(initialDate) // .setZone("Europe/Helsinki").setLocale("fi-fi")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((previousValue) => {
        return previousValue.plus({ seconds: 1 });
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return now;
};

export default useTime;
