import { ascend, prop, sortWith } from "ramda";
import { FC, lazy, useMemo } from "react";
import { DuckType } from "../services/duck";
import useDuckStore from "../services/store";
import DuckList from "./DuckList";
import LazyLoader from "./LazyLoader";
// import HireDuckForm from "./HireDuckForm";

const HireDuckForm = lazy(() => import("./HireDuckForm"));

const isGood = (duck: DuckType): boolean => {
  if (duck.relatedToCEO) {
    return true;
  }

  if (duck.age >= 7) {
    return false;
  }

  return true;
};

const duckSorter = sortWith<DuckType>([
  ascend(prop("lastName")),
  ascend(prop("firstName"))
]);

const IndexPage: FC = () => {
  const ducks = useDuckStore((state) => Object.values(state.ducks));
  const fireDuck = useDuckStore((state) => state.fireDuck);
  const hireDuck = useDuckStore((state) => state.hireDuck);
  const secondsElapsed = useDuckStore((state) => state.secondElapsed);

  const [goodDucks, badDucks] = useMemo(() => {
    /*
    const sortedDucks = [...ducks].sort((a, b) => {
      const lastNameComparison = a.lastName.localeCompare(b.lastName);

      if (lastNameComparison !== 0) {
        return lastNameComparison;
      }

      return a.firstName.localeCompare(b.firstName);
    });
    */

    const sortedDucks = duckSorter(ducks);

    const goodDucks = sortedDucks.filter(isGood);
    const badDucks = sortedDucks.filter((d) => !isGood(d));
    return [goodDucks, badDucks];
  }, [ducks]);

  return (
    <section>
      <p>
        Sekunteja kulunut: <strong>{secondsElapsed}</strong>
      </p>

      <LazyLoader>
        <HireDuckForm hireDuck={hireDuck} />
      </LazyLoader>

      {ducks.length === 0 && <p>Ei ankkoja...</p>}

      <h2>Pahat ankat</h2>
      <DuckList fireDuck={fireDuck} ducks={badDucks} showMetadata />

      <h2>Hyvät ankat</h2>
      <DuckList fireDuck={fireDuck} ducks={goodDucks} showMetadata />
    </section>
  );
};

export default IndexPage;
