import { FC, useEffect, useState } from "react";
import { getDucks, DuckType } from "../services/duck";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

import styles from "./App.module.css";

const App: FC = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  const [ducks, setDucks] = useState<DuckType[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const fireDuck = (id: string) => {
    setDucks((currentDucks) => {
      return currentDucks.filter((duck) => duck.id !== id);
    });
  };

  const hireDuck = (duck: DuckType) => {
    setDucks((currentDucks) => currentDucks.concat(duck));
  };

  useEffect(() => {
    // console.log("Each and every time I log!");
  });

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

  useEffect(() => {
    /*
    const getter = async () => {
      const persons = await getPersons();
      setPersons(persons);
    };
    getter();
    */

    getDucks().then((ducks) => {
      setDucks(ducks);
      setIsInitialized(true);
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Duck ERP 2022</h1>
      </header>
      <main className={styles.main}>
        <HireDuckForm hireDuck={hireDuck} />

        <p>
          I have been rendered <strong>{renderCount}</strong> times!
        </p>

        {!isInitialized && <em>HOLD YER HORSES...</em>}

        <DuckList ducks={ducks} />
      </main>
    </>
  );

  // If you want to render nothing, you return null (or false maybe). No undefineds!
  return null;
};

export default App;
