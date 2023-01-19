type Props = {};

import { FC, useEffect, useState, useCallback, useMemo } from "react";

import type { DuckProspectType, DuckType } from "../services/duck";
import * as duckService from "../services/duck";
import CleanseButton from "./debug/CleanseButton";

import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

const isGood = (duck: DuckType): boolean => {
  if (duck.relatedToCEO) {
    return true;
  }

  if (duck.age >= 7) {
    return false;
  }

  return true;
};

const App: FC<Props> = () => {
  const [ducks, setDucks] = useState<DuckType[]>([]);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  const fireDuck = useCallback(
    async (id: DuckType["id"]) => {
      const firedDuck = await duckService.fireDuck(id);
      setDucks((oldDucks) => oldDucks.filter((d) => d.id !== firedDuck.id));
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (prospect: DuckProspectType) => {
      const hiredDuck = await duckService.hireDuck(prospect);

      console.log(hiredDuck, "hip hap huu");

      // setDucks((oldDucks) => oldDucks.concat(prospect));
      setDucks((oldDucks) => [...oldDucks, hiredDuck]);
    },
    [setDucks]
  );

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
    duckService.getDucks().then(setDucks);

    return () => {
      console.log("NOTHING HAS CHANGED CLEANUP");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSecondsElapsed]);

  const [goodDucks, badDucks] = useMemo(() => {
    const goodDucks = ducks.filter(isGood);
    const badDucks = ducks.filter((d) => !isGood(d));
    return [goodDucks, badDucks];
  }, [ducks]);

  return (
    <main>
      <h1>Hyper ERP 50000 Pro</h1>

      <CleanseButton />

      <p>
        Sekunteja kulunut: <strong>{secondsElapsed}</strong>
      </p>

      <HireDuckForm hireDuck={hireDuck} />

      {ducks.length === 0 && <p>Ei ankkoja...</p>}

      <h2>Pahat ankat</h2>
      <DuckList fireDuck={fireDuck} ducks={badDucks} showMetadata />

      <h2>Hyvät ankat</h2>
      <DuckList fireDuck={fireDuck} ducks={goodDucks} />
    </main>
  );
};

export default App;
