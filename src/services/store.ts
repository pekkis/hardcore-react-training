import { create } from "zustand";
import { DuckProspectType, DuckType } from "./duck";
import * as duckService from "./duck";
import produce from "immer";

interface DuckState {
  isInitialized: boolean;
  loadingOperations: number;

  secondElapsed: number;
  incrementSecondsElapsed: () => void;

  ducks: Record<string, DuckType>;

  getDucks: () => void;
  fireDuck: (id: DuckType["id"]) => void;
  hireDuck: (prospect: DuckProspectType) => void;
}

const useDuckStore = create<DuckState>((set) => {
  return {
    isInitialized: false,
    loadingOperations: 0,
    ducks: {},
    secondElapsed: 0,
    incrementSecondsElapsed: () => {
      set((state) => {
        return {
          secondElapsed: state.secondElapsed + 1
        };
      });
    },
    getDucks: async () => {
      set((state) => ({
        loadingOperations: state.loadingOperations + 1
      }));

      const ducks = await duckService.getDucks();

      set((state) => ({
        isInitialized: true,
        ducks: Object.fromEntries(ducks.map((d) => [d.id, d])),
        loadingOperations: state.loadingOperations - 1
      }));
    },
    fireDuck: async (id) => {
      set((state) => {
        return produce(state, (draft) => {
          draft.ducks[id].isBeingFired = true;
          draft.loadingOperations = draft.loadingOperations + 1;
        });
      });

      const firedDuck = await duckService.fireDuck(id);
      set((state) => {
        return produce(state, (draft) => {
          delete draft.ducks[firedDuck.id];
          draft.loadingOperations = draft.loadingOperations - 1;
        });
      });
    },
    hireDuck: async (prospect) => {
      set((state) => ({
        loadingOperations: state.loadingOperations + 1
      }));

      const hiredDuck = await duckService.hireDuck(prospect);
      set((state) => {
        return produce(state, (draft) => {
          draft.ducks[hiredDuck.id] = hiredDuck;
          draft.loadingOperations = draft.loadingOperations - 1;
        });
      });
    }
  };
});

export default useDuckStore;
