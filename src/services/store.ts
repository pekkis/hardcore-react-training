import create from "zustand";
import duckService, { DuckType, DuckProspectType } from "../services/duck";
import produce from "immer";

export type State = {
  operationsPending: number;
  duckIsBeingHired: boolean;
  ducks: Record<string, DuckType>;
  isInitialized: boolean;
  fireDuck: (id: string) => void;
  hireDuck: (prospect: DuckProspectType) => void;
  getDucks: () => void;
};

const useStore = create<State>((set) => ({
  duckIsBeingHired: false,
  ducks: {},
  isInitialized: false,
  operationsPending: 0,

  fireDuck: async (id: string) => {
    set((state) =>
      produce(state, (draft) => {
        draft.ducks[id].isBeingFired = true;
        draft.operationsPending = draft.operationsPending + 1;
      })
    );
    const firedDuck = await duckService.fireDuck(id);

    set((state) =>
      produce(state, (draft) => {
        delete draft.ducks[firedDuck.id];
        draft.operationsPending = draft.operationsPending - 1;
      })
    );
  },

  hireDuck: async (prospect: DuckProspectType) => {
    set((state) => ({
      duckIsBeingHired: true,
      operationsPending: state.operationsPending + 1
    }));

    const duck = await duckService.hireDuck(prospect);

    set((state) =>
      produce(state, (draft) => {
        draft.duckIsBeingHired = false;
        draft.ducks[duck.id] = duck;
        draft.operationsPending = draft.operationsPending - 1;
      })
    );
  },

  getDucks: async () => {
    set((state) => ({
      operationsPending: state.operationsPending + 1
    }));

    const ducks = await duckService.getDucks();

    set((state) => ({
      operationsPending: state.operationsPending - 1,
      ducks: Object.fromEntries(ducks.map((d) => [d.id, d])),
      isInitialized: true
    }));
  }
}));

export default useStore;
