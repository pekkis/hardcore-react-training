import { FC, useEffect, useState } from "react";

const SecondsElapsed: FC = () => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  useEffect(() => {
    // once.
    console.log("SecondsEnabled :: Render!");

    const timeout = setInterval(() => {
      setSecondsElapsed((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <p>
      Sekunteja kulunut: <strong>{secondsElapsed}</strong>
    </p>
  );
};

export default SecondsElapsed;
