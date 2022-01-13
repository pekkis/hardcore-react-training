import { FC, useCallback, useEffect, useState } from "react";
import duckService, { DuckType, DuckProspectType } from "../services/duck";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

import styles from "./App.module.css";
import { cleanse } from "../services/instance";
import produce from "immer";

const App: FC = () => {
  const [renderCount, setRenderCount] = useState<number>(0);
  const [ducks, setDucks] = useState<Record<string, DuckType>>({});
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [duckIsBeingHired, setDuckIsBeingHired] = useState<boolean>(false);

  const fireDuck = useCallback(
    async (id: string) => {
      setDucks((currentDucks) =>
        produce(currentDucks, (draft) => {
          draft[id].isBeingFired = true;
        })
      );

      const firedDuck = await duckService.fireDuck(id);
      setDucks((currentDucks) =>
        produce(currentDucks, (draft) => {
          delete draft[firedDuck.id];
        })
      );
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (prospect: DuckProspectType) => {
      setDuckIsBeingHired(true);

      const duck = await duckService.hireDuck(prospect);
      setDucks((currentDucks) =>
        produce(currentDucks, (draft) => {
          draft[duck.id] = duck;
        })
      );
      setDuckIsBeingHired(false);
    },
    [setDucks]
  );

  /*
  useEffect(() => {
    console.log("Each and every time I log!");
  });
  */

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

    duckService.getDucks().then((ducks) => {
      setDucks(Object.fromEntries(ducks.map((d) => [d.id, d])));
      setIsInitialized(true);
    });
  }, []);

  const isGood = (duck: DuckType) => {
    if (duck.relatedToCEO) {
      return true;
    }

    return duck.age < 8 && duck.age >= 1 && !duck.migratesForWinters;
  };

  const goodDucks = Object.values(ducks).filter(isGood);
  const badDucks = Object.values(ducks).filter((duck) => !isGood(duck));

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Duck ERP 2022</h1>
      </header>
      <main className={styles.main}>
        <HireDuckForm hireDuck={hireDuck} duckIsBeingHired={duckIsBeingHired} />

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

        {!isInitialized && <em>HOLD YER HORSES...</em>}

        <h2>Bad ducks</h2>
        <DuckList showMetadata fireDuck={fireDuck} ducks={badDucks} />

        <h2>Good ducks</h2>
        <DuckList fireDuck={fireDuck} ducks={goodDucks} />
      </main>
    </>
  );

  // If you want to render nothing, you return null (or false maybe). No undefineds!
  return null;
};

export default App;
