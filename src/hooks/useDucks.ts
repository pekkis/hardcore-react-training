import { useCallback, useEffect, useState } from "react";
import duckService, { DuckType, DuckProspectType } from "../services/duck";
import produce from "immer";

const useDucks = () => {
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

  return {
    ducks,
    fireDuck,
    hireDuck,
    isInitialized,
    duckIsBeingHired
  };
};

export default useDucks;
