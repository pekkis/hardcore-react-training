import { DateTime } from "luxon";
import { useState, useEffect } from "react";

const useTime = () => {
  // Clock state and effect here
  const [time, setTime] = useState<DateTime>(DateTime.utc());
  useEffect(() => {
    console.log("Time to update da clock maaan!");

    const updateTimeInterval = setInterval(() => {
      setTime(DateTime.utc());
    }, 1000);

    return () => {
      clearInterval(updateTimeInterval);
    };
  }, [setTime]);

  return time;
};

export default useTime;
