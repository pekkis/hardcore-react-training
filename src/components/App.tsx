import { Component, FC, useEffect, useState } from "react";
import { DuckType, getDucks } from "../services/duck";
import styles from "./App.module.pcss";

// console.log(styles);

type Props = {};

const App: FC<Props> = (props) => {
  const [ducks, setDucks] = useState<DuckType[]>([]);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  console.log(ducks);

  useEffect(() => {
    console.log("App :: Render!");

    const timeout = setInterval(() => {
      console.log("hip hap huu");
      setSecondsElapsed((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    console.log("App :: Render!");
  });

  useEffect(() => {
    // oldValue === newValue
    console.log("App :: Ducks have changed");
  }, [ducks]);

  useEffect(() => {
    // oldValue === newValue
    console.log("App :: Ducks have changed");

    getDucks().then(setDucks);

    /*
    const fetcher = async () => {
      const ducksFromServer = await getDucks();
      setDucks(ducksFromServer);
    };
    fetcher();
    */

    // const ducks = await getDucks();

    /*
  const ducksFromServer = getDucks().then((ducks) => {
    setDucks(ducks);
  });
  */

    // can return either undefined or a cleanup function

    return () => {
      // cleanup
    };
  }, []);

  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Duck ERP 10000 Pro</h1>

      <p>
        Sekunteja kulunut: <strong>{secondsElapsed}</strong>
      </p>

      <div>
        {ducks.map((duck) => {
          return (
            <div>
              {duck.lastName}, {duck.firstName}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
