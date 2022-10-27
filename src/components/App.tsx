import { FC, useEffect, useState } from "react";

import CleanseButton from "./debug/CleanseButton";

import useDuckStore from "../services/state";
import "./App.css";
import { spinnerClass } from "./App.css";
import Spinner from "./debug/Spinner";
import IndexPage from "./IndexPage";
import { Outlet } from "react-router";

type Props = {};

const App: FC<Props> = (props) => {
  const getDucks = useDuckStore((state) => state.getDucks);

  const isSpinningLikeTheWind = useDuckStore(
    (state) => state.spinLikeTheWind > 0
  );

  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("UPDATE SECONDS ELAPSED!!");
      setSecondsElapsed((oldSecondsElapsed) => oldSecondsElapsed + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  useEffect(() => {
    getDucks();
    // duckService.getDucks().then(setDucks);
  }, []);

  useEffect(() => {
    console.log("RENDER");
  });

  return (
    <main>
      <div className={spinnerClass}>{isSpinningLikeTheWind && <Spinner />}</div>
      <CleanseButton />
      <h1>Giga ERP 50.000 PRO</h1>
      <p>
        Sovellusta on käytetty <strong>{secondsElapsed}</strong> sekuntia.
      </p>

      <Outlet />
    </main>
  );
};

export default App;
