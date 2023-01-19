type Props = {};

import { FC, useEffect } from "react";

import CleanseButton from "./debug/CleanseButton";

import useDuckStore from "../services/store";
import Spinner from "./Spinner";
import { Outlet } from "react-router-dom";

const App: FC<Props> = () => {
  const ducks = useDuckStore((state) => Object.values(state.ducks));
  const isLoading = useDuckStore((state) => state.loadingOperations > 0);
  const getDucks = useDuckStore((state) => state.getDucks);

  const incrementor = useDuckStore((state) => state.incrementSecondsElapsed);

  const isInitialized = useDuckStore((state) => state.isInitialized);

  useEffect(() => {
    console.log("RENDER APP");

    return () => {
      console.log("RENDER APP CLEANUP");
    };
  });

  useEffect(() => {
    console.log("DUCKS HAVE CHANGED", ducks);
    // getDucks().then(setDucks);

    return () => {
      console.log("DUCKS HAVE CHANGED CLEANUP");
    };
  }, [ducks]);

  useEffect(() => {
    getDucks();
    return () => {
      console.log("NOTHING HAS CHANGED CLEANUP");
    };
  }, [getDucks]);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementor();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [incrementor]);

  if (!isInitialized) {
    return <main>HOLD YOUR HORSES!</main>;
  }

  return (
    <main>
      <h1>Hyper ERP 50000 Pro</h1>

      {isLoading && <Spinner />}

      <CleanseButton />

      <hr />

      <Outlet />
    </main>
  );
};

export default App;
