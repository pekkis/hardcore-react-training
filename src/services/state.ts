import create from "zustand";
import { DuckProspectType, DuckType } from "./duck";
import * as duckService from "./duck";
import produce from "immer";
// import { devtools, persist } from "zustand/middleware";

interface DuckState {
  spinLikeTheWind: number;
  ducks: Record<string, DuckType>; // DuckType[];
  getDucks: () => void;
  fireDuck: (id: string) => void;
  hireDuck: (prospect: DuckProspectType) => void;
}

const useDuckStore = create<DuckState>((set) => ({
  spinLikeTheWind: 0,
  ducks: {},
  getDucks: async () => {
    set((state) => ({
      spinLikeTheWind: state.spinLikeTheWind + 1
    }));

    const ducks = await duckService.getDucks();
    set((state) => ({
      ducks: Object.fromEntries(ducks.map((d) => [d.id, d])),
      spinLikeTheWind: state.spinLikeTheWind - 1
    }));
  },
  fireDuck: async (id) => {
    set((state) => ({
      spinLikeTheWind: state.spinLikeTheWind + 1
    }));

    set((state) => {
      return produce(state, (draft) => {
        draft.ducks[id].isBeingFired = true;
      });
    });

    // tähän läpeen se täytyy tehdä.

    const firedDuck = await duckService.fireDuck(id);
    set((state) => {
      return produce(state, (draft) => {
        delete draft.ducks[firedDuck.id];
        draft.spinLikeTheWind = draft.spinLikeTheWind - 1;
      });
      /*
      return {
        ducks: state.ducks.filter((d) => d.id !== firedDuck.id),
        spinLikeTheWind: state.spinLikeTheWind - 1
      };
      */
    });
  },
  hireDuck: async (prospect) => {
    set((state) => ({
      spinLikeTheWind: state.spinLikeTheWind + 1
    }));

    const hiredDuck = await duckService.hireDuck(prospect);
    set((state) => {
      return produce(state, (draft) => {
        draft.ducks[hiredDuck.id] = hiredDuck;
        draft.spinLikeTheWind = draft.spinLikeTheWind - 1;
      });

      /*
      return {
        ducks: state.ducks.concat([hiredDuck]),
        spinLikeTheWind: state.spinLikeTheWind - 1
      };
      */
    });
  }
}));

export default useDuckStore;
