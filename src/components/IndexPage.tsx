import { FC, useMemo } from "react";
import { DuckType } from "../services/duck";
import useDuckStore from "../services/state";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

const isGoodDuck = (duck: DuckType) => {
  if (duck.relatedToCEO) {
    return true;
  }

  if (duck.age > 10 || duck.migratesForWinters) {
    return false;
  }

  return true;
};

const IndexPage: FC = () => {
  const ducks = useDuckStore((state) => Object.values(state.ducks));
  const hireDuck = useDuckStore((state) => state.hireDuck);
  const fireDuck = useDuckStore((state) => state.fireDuck);

  const goodDucks = useMemo(() => ducks.filter(isGoodDuck), [ducks]);
  const badDucks = useMemo(() => ducks.filter((d) => !isGoodDuck(d)), [ducks]);

  return (
    <div>
      <HireDuckForm hireDuck={hireDuck} />
      <h2>Pahat ankat</h2>
      <DuckList
        showConfidentialInformation
        ducks={badDucks}
        fireDuck={fireDuck}
      />
      <h2>Hyvät ankat</h2>
      <DuckList ducks={goodDucks} fireDuck={fireDuck} />
    </div>
  );
};

export default IndexPage;
