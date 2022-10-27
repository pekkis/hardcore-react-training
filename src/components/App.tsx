import { FC, useEffect, useState, useCallback, useMemo } from "react";
import type { DuckType, DuckProspectType } from "../services/duck";
import * as duckService from "../services/duck";

import CleanseButton from "./debug/CleanseButton";

import "./App.css";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

type Props = {};

const isGoodDuck = (duck: DuckType) => {
  if (duck.relatedToCEO) {
    return true;
  }

  if (duck.age > 10 || duck.migratesForWinters) {
    return false;
  }

  return true;
};

const App: FC<Props> = (props) => {
  const [ducks, setDucks] = useState<DuckType[]>([]);

  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  const fireDuck = useCallback(
    async (id: string) => {
      await duckService.fireDuck(id);
      setDucks((ducks) => {
        return ducks.filter((d) => d.id !== id);
      });
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (prospect: DuckProspectType) => {
      const hiredDuck = await duckService.hireDuck(prospect);
      setDucks((ducks) => {
        return ducks.concat([hiredDuck]);
        // return [...ducks, hiredDuck];
        // return ducks.filter((d) => d.id !== id);
      });
    },
    [setDucks]
  );

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
    duckService.getDucks().then(setDucks);
  }, []);

  useEffect(() => {
    console.log("RENDER");
  });

  const goodDucks = useMemo(() => ducks.filter(isGoodDuck), [ducks]);
  const badDucks = useMemo(() => ducks.filter((d) => !isGoodDuck(d)), [ducks]);

  return (
    <main>
      <CleanseButton />
      <h1>Giga ERP 50.000 PRO</h1>

      <HireDuckForm hireDuck={hireDuck} />

      <p>
        Sovellusta on käytetty <strong>{secondsElapsed}</strong> sekuntia.
      </p>

      <h2>Pahat ankat</h2>
      <DuckList
        showConfidentialInformation
        ducks={badDucks}
        fireDuck={fireDuck}
      />

      <h2>Hyvät ankat</h2>
      <DuckList ducks={goodDucks} fireDuck={fireDuck} />
    </main>
  );
};

export default App;
