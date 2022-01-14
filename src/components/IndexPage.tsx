import { FC } from "react";
import { DuckType } from "../services/duck";
import useStore from "../services/store";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";
import Helmet from "react-helmet";

const IndexPage: FC = () => {
  const ducks = useStore((state) => state.ducks);
  const fireDuck = useStore((state) => state.fireDuck);
  const isInitialized = useStore((state) => state.isInitialized);
  const hireDuck = useStore((state) => state.hireDuck);
  const duckIsBeingHired = useStore((state) => state.duckIsBeingHired);

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
      <Helmet>
        <title>Duck List - Mallard ERP</title>
      </Helmet>

      <HireDuckForm hireDuck={hireDuck} duckIsBeingHired={duckIsBeingHired} />

      {!isInitialized && (
        <p>
          <em>HOLD YER HORSES...</em>
        </p>
      )}

      {isInitialized && (
        <>
          <h2>Bad ducks</h2>
          <DuckList showMetadata fireDuck={fireDuck} ducks={badDucks} />

          <h2>Good ducks</h2>
          <DuckList fireDuck={fireDuck} ducks={goodDucks} />
        </>
      )}
    </>
  );
};

export default IndexPage;
