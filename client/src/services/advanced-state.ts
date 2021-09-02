import create from "zustand";
import { PersonType } from "../components/App";
import produce from "immer";
import personService from "./person";
import { indexBy } from "ramda";
import { devtools } from "zustand/middleware";

export type State = {
  persons: Record<string, PersonType>;
  numberOfRenders: number;
  isLoading: number;

  getPersons: () => void;
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
};

export const useStore = create<State>(
  devtools((set) => ({
    numberOfRenders: 0,
    persons: {},
    isLoading: 0,
    getPersons: async () => {
      set((state) => ({ isLoading: state.isLoading + 1 }));

      const persons = await personService.getPersons();

      set((state) => ({ isLoading: state.isLoading - 1 }));
      set({
        persons: indexBy((p) => p.id, persons)
      });
    },
    firePerson: async (id: string) => {
      set((state) => {
        return produce(state, (draft) => {
          draft.isLoading = draft.isLoading + 1;
          draft.persons[id].isBeingFired = true;
        });
      });

      try {
        const fired = await personService.firePerson(id);
        set((state) => {
          return produce(state, (draft) => {
            delete draft.persons[fired.id];
          });
        });
        set((state) => ({ isLoading: state.isLoading - 1 }));
      } catch (e) {
        set((state) => ({ isLoading: state.isLoading - 1 }));
        console.log("OH NOES");
      }
    },
    hirePerson: (person: PersonType) => {
      set((state) => {
        return produce(state, (draft) => {
          draft.persons[person.id] = person;
        });
      });
    }
  }))
);
