import { useEffect, useState } from "react";

const useTime = (serverTime: number): number => {
  const [currentTime, setCurrentTime] = useState(serverTime);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("HEPS");
      setCurrentTime((previous) => previous + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
};

export default useTime;
