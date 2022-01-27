import create from "zustand";
import duckService, { DuckProspectType, DuckType } from "./duck";
import produce from "immer";

type DuckState = Record<string, DuckType>;

type DuckStore = {
  isInitialized: boolean;
  ducks: DuckState;
  operationsPending: number;
  getDucks: () => void;
  hireDuck: (prospect: DuckProspectType) => void;
  fireDuck: (id: DuckType["id"]) => void;
};

const useDuckStore = create<DuckStore>((set) => {
  return {
    ducks: {},
    operationsPending: 0,
    isInitialized: false,

    getDucks: async () => {
      set((state) => ({
        operationsPending: state.operationsPending + 1
      }));

      const ducks = await duckService.getDucks();

      set((state) => {
        return {
          ducks: Object.fromEntries(ducks.map((d) => [d.id, d])),
          operationsPending: state.operationsPending - 1,
          isInitialized: true
        };
      });
    },
    hireDuck: async (prospect: DuckProspectType) => {
      set((state) => ({
        operationsPending: state.operationsPending + 1
      }));

      const hiredDuck = await duckService.hireDuck(prospect);

      set((state) => ({
        operationsPending: state.operationsPending + 1,
        ducks: produce(state.ducks, (draft) => {
          draft[hiredDuck.id] = hiredDuck;
        })
      }));
    },
    fireDuck: async (id: DuckType["id"]) => {
      set((state) => ({
        operationsPending: state.operationsPending + 1,
        ducks: produce(state.ducks, (draft) => {
          draft[id].isBeingFired = true;
        })
      }));

      const firedDuck = await duckService.fireDuck(id);

      set((state) => ({
        operationsPending: state.operationsPending - 1,
        ducks: produce(state.ducks, (draft) => {
          delete draft[firedDuck.id];
        })
      }));
    }
  };
});

export default useDuckStore;
