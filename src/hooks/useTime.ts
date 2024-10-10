import { useEffect, useState } from "react";

export const useTime = (initialTime: number) => {
  const [currentTime, setCurrentTime] = useState(initialTime);

  // "suoritetaan joka kerta kun rendaus tapahtuu"
  useEffect(() => {
    console.log("Milloin minut suoritetaan?");
  });

  // "depsut" toisena parametrina
  useEffect(() => {
    const t = setInterval(() => {
      // setCurrentTime(currentTime + 1000);

      setCurrentTime((prev) => prev + 1000);
    }, 1000);

    return () => {
      console.log("HEPS CUCCUU");
      clearInterval(t);
    };
  }, []);

  return currentTime;
};
