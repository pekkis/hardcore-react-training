import { FC, useEffect, useState, useCallback, useMemo } from "react";
import duck, { DuckType, getDucks } from "../services/duck";
import { cleanse } from "../services/instance";
import styles from "./App.module.pcss";
import DuckList from "./DuckList";
import {
  fireDuck as fireDuckService,
  hireDuck as hireDuckService
} from "../services/duck";
import HireDuckForm from "./HireDuckForm";
import SecondsElapsed from "./SecondsElapsed";

// console.log(styles);

type Props = {};

const isGood = (duck: DuckType): boolean => {
  if (duck.relatedToCEO === true) {
    return true;
  }
  return duck.age < 10 && duck.migratesForWinters === false;
};

const DuckTitle = ({ numberOfDucks }) => <h2>Pahat ankat ({numberOfDucks})</h2>;

const App: FC<Props> = (props) => {
  const [ducks, setDucks] = useState<DuckType[]>([]);

  const fireDuck = useCallback(
    async (id: string) => {
      const firedDuck = await fireDuckService(id);
      setDucks((oldDucks) => oldDucks.filter((d) => d.id !== firedDuck.id));
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (duck: DuckType) => {
      console.log("WILL HIRE", duck);

      // todo: FIX TYPE
      delete duck.age;

      const hiredDuck = await hireDuckService(duck);

      console.log("GONNA HIRE", hiredDuck);
      setDucks((oldDucks) => oldDucks.concat(hiredDuck));
    },
    [setDucks]
  );

  useEffect(() => {
    // Every time.
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

  const goodDucks = useMemo(() => ducks.filter(isGood), [ducks]);
  const badDucks = useMemo(() => ducks.filter((d) => !isGood(d)), [ducks]);

  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Duck ERP 10000 Pro</h1>

      <HireDuckForm hireDuck={hireDuck} />

      <button
        onClick={() => {
          cleanse();
        }}
      >
        cleanse
      </button>

      <SecondsElapsed />

      <DuckList
        fireDuck={fireDuck}
        ducks={badDucks}
        showMetadata
        title={DuckTitle}
      />

      <DuckList fireDuck={fireDuck} ducks={goodDucks} title={DuckTitle} />
    </section>
  );
};

export default App;
