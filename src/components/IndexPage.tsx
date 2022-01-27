import { FC, useMemo } from "react";
import { DuckType } from "../services/duck";
import useDuckStore from "../services/useDuckStore";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

const isGood = (duck: DuckType): boolean => {
  if (duck.relatedToCEO === true) {
    return true;
  }

  if (duck.age < 10 && duck.migratesForWinters === false) {
    return true;
  }

  return false;
};

const IndexPage: FC = () => {
  const fireDuck = useDuckStore((state) => state.fireDuck);
  const hireDuck = useDuckStore((state) => state.hireDuck);
  const ducks = useDuckStore((state) => state.ducks);

  const goodDucks = useMemo(() => Object.values(ducks).filter(isGood), [ducks]);
  const badDucks = useMemo(
    () => Object.values(ducks).filter((duck) => !isGood(duck)),
    [ducks]
  );

  return (
    <section>
      <HireDuckForm hireDuck={hireDuck} />

      <h2>Bad ducks</h2>
      <DuckList ducks={badDucks} showMetadata fireDuck={fireDuck} />

      <h2>Good ducks</h2>
      <DuckList ducks={goodDucks} fireDuck={fireDuck} />
    </section>
  );
};

export default IndexPage;
