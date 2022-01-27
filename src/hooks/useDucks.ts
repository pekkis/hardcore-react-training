import { useCallback, useEffect, useState } from "react";
import duckService, { DuckProspectType, DuckType } from "../services/duck";
import produce from "immer";

type DuckState = Record<string, DuckType>;

const useDucks = () => {
  const [ducks, setDucks] = useState<DuckState>({});
  const [operationsPending, setOperationsPending] = useState<number>(0);

  const fireDuck = useCallback(
    async (id: DuckType["id"]) => {
      // console.log("WILL FIRE DUCK #", id);

      // const firer = debounce;

      setOperationsPending((p) => p + 1);

      // set the duck in question to have isBeingFired: true!

      setDucks((ducks) =>
        produce(ducks, (draft) => {
          draft[id].isBeingFired = true;
        })
      );

      const firedDuck = await duckService.fireDuck(id);
      setOperationsPending((p) => p - 1);

      setDucks((ducks) => {
        return produce(ducks, (draft) => {
          delete draft[firedDuck.id];
        });
      });
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (prospect: DuckProspectType) => {
      setOperationsPending((p) => p + 1);

      const hiredDuck = await duckService.hireDuck(prospect);

      setOperationsPending((p) => p - 1);

      /*
      const duck: DuckType = {
        ...prospect,
        id: v4()
      };
      */

      setDucks((ducks) => {
        // OBS!
        // return ducks.concat(hiredDuck);
        // return ducks.filter((duck) => duck.id !== id);

        return produce(ducks, (draft) => {
          draft[hiredDuck.id] = hiredDuck;
        });

        /*
        return {
          ...ducks,
          [hiredDuck.id]: hiredDuck
        };
        */

        // ducks[hiredDuck.id] = hiredDuck;
      });
    },
    [setDucks]
  );

  useEffect(() => {
    /*
    const ducksGetter = async () => {
      const ducks = await getDucks();
      setDucks(ducks);
    };
    ducksGetter();
    */

    setOperationsPending((p) => p + 1);
    duckService.getDucks().then((ducks) => {
      /*
      [
        [index, obj],
        [index, obj],
        [index, obj],
        [index, obj],
      ]
      */

      const duckState: DuckState = Object.fromEntries(
        ducks.map((d) => [d.id, d])
      );

      setDucks(duckState);
      setOperationsPending((p) => p - 1);
    });
  }, []);

  return {
    ducks,
    operationsPending,
    fireDuck,
    hireDuck
  };
};

export default useDucks;
