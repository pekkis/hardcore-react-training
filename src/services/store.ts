import {
  DuckProspectType,
  DuckType,
  fireDuck,
  getDucks,
  hireDuck
} from "./duck";
import create from "zustand";
import produce from "immer";

export type AppState = {
  ducks: Record<string, DuckType>; // DuckType[];
  secondsElapsed: number;
  getDucks: () => void;
  fireDuck: (id: string) => void;
  hireDuck: (duck: DuckProspectType) => void;
  incrementSecondsElapsed: () => void;
  duckIsBeingHired: boolean;
  isLoading: number;
  isInitialized: boolean;
};

/*
const newDuck = {
  ...oldDuck,
  isBeingFired: true
}
*/

const useStore = create<AppState>((set) => {
  return {
    ducks: {},
    secondsElapsed: 0,
    isLoading: 0,
    duckIsBeingHired: false,
    isInitialized: false,

    incrementSecondsElapsed: () => {
      set((state) => ({ secondsElapsed: state.secondsElapsed + 1 }));
    },

    getDucks: async () => {
      set(({ isLoading }) => ({ isLoading: isLoading + 1 }));

      try {
        const duckList = await getDucks();
        const ducks = Object.fromEntries(duckList.map((d) => [d.id, d]));

        set((state) => {
          return {
            ducks,
            isLoading: state.isLoading - 1,
            isInitialized: true
          };
        });
      } catch (e) {
        console.log("errore fatale");
        set(({ isLoading }) => ({ isLoading: isLoading - 1 }));
        // mega error
      }
    },
    fireDuck: async (id: string) => {
      set((state) =>
        produce(state, (draft) => {
          draft.isLoading = draft.isLoading + 1;
          draft.ducks[id].isBeingFired = true;
        })
      );

      // set(({ isLoading }) => ({ isLoading: isLoading + 1 }));

      const firedDuck = await fireDuck(id);

      set((state) => {
        return produce(state, (draft) => {
          delete draft.ducks[firedDuck.id];
          draft.isLoading = draft.isLoading - 1;
        });

        /*
        return {
          ducks: state.ducks.filter((d) => d.id !== firedDuck.id),
          isLoading: state.isLoading - 1
        };
        */
      });

      // sets((oldDucks) => oldDucks.filter((d) => d.id !== firedDuck.id));
    },
    hireDuck: async (duck: DuckProspectType) => {
      set((state) => ({
        duckIsBeingHired: true,
        isLoading: state.isLoading + 1
      }));

      const hiredDuck = await hireDuck(duck);

      set((state) => {
        return produce(state, (draft) => {
          draft.isLoading = draft.isLoading - 1;
          draft.ducks[hiredDuck.id] = hiredDuck;
          draft.duckIsBeingHired = false;
        });

        /*
        return {
          ducks: state.ducks.concat(hiredDuck),
          duckIsBeingHired: false,
          isLoading: state.isLoading - 1
        };
        */
      });
    }
  };
});

export default useStore;
