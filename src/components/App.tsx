import { FC, useEffect, useState } from "react";
import HireDuckForm from "./HireDuckForm";

import styles from "./App.module.css";
import { cleanse } from "../services/instance";
// import useDucks from "../hooks/useDucks";
import useStore from "../services/store";
import Spinner from "./Spinner";
import { Outlet } from "react-router";

const App: FC = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  // const { ducks, isInitialized, hireDuck, fireDuck, duckIsBeingHired } = useDucks();

  const getDucks = useStore((state) => state.getDucks);
  const operationsPending = useStore((state) => state.operationsPending);

  useEffect(() => {
    getDucks();
  }, [getDucks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderCount((renderCount) => {
        // console.log("Time to update counter!", renderCount);
        return renderCount + 1;
      });
    }, 1000);

    return () => {
      console.log("I am cleaning up");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {operationsPending > 0 && <Spinner />}
      <header className={styles.header}>
        <h1 className={styles.heading}>Mallard ERP</h1>
      </header>
      <main className={styles.main}>
        <p>
          I have been rendered <strong>{renderCount}</strong> times!{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              cleanse();
            }}
          >
            cleanse
          </button>
        </p>

        <Outlet />
      </main>
    </>
  );
};

export default App;
