import { useEffect, useState } from "react";

const useTime = (startTime: number) => {
  const [current, setCurrent] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("I AM CHANGING!!!!");
      setCurrent((prev) => prev + 1);
    }, 1000);

    // return undefined;

    return () => {
      clearInterval(interval);
    };
  }, []);

  return current;
};

export default useTime;
