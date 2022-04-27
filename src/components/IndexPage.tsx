import { FC, lazy, useMemo } from "react";
import { DuckType } from "../services/duck";
import useStore from "../services/store";
import DuckList from "./DuckList";
import LazyLoader from "./LazyLoader";

// import HireDuckForm from "./HireDuckForm";

import SecondsElapsed from "./SecondsElapsed";

const HireDuckForm = lazy(() => import("./HireDuckForm"));

type Props = {};

const DuckTitle = ({ numberOfDucks }: { numberOfDucks: string }) => (
  <h2>Pahat ankat ({numberOfDucks})</h2>
);

const isGood = (duck: DuckType): boolean => {
  if (duck.relatedToCEO === true) {
    return true;
  }
  return duck.age < 10 && duck.migratesForWinters === false;
};

const IndexPage: FC<Props> = () => {
  const ducks = useStore((store) => Object.values(store.ducks));

  const fireDuck = useStore((store) => store.fireDuck);
  const hireDuck = useStore((store) => store.hireDuck);

  const goodDucks = useMemo(() => ducks.filter(isGood), [ducks]);
  const badDucks = useMemo(() => ducks.filter((d) => !isGood(d)), [ducks]);

  const secondsElapsed = useStore((store) => store.secondsElapsed);
  const increment = useStore((store) => store.incrementSecondsElapsed);

  return (
    <div>
      <LazyLoader>
        <HireDuckForm hireDuck={hireDuck} />
      </LazyLoader>
      <DuckList
        fireDuck={fireDuck}
        ducks={badDucks}
        showMetadata
        title={DuckTitle}
      />
      <DuckList fireDuck={fireDuck} ducks={goodDucks} title={DuckTitle} />
      <SecondsElapsed
        secondsElapsed={secondsElapsed}
        increment={increment}
        intervalMillis={3333}
      />
    </div>
  );
};

export default IndexPage;
