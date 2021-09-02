import create from "zustand";
import { getPersons, firePerson, PersonType } from "./person";

// import produce from "immer";
// import { devtools } from "zustand/middleware";

import produce from "immer";
import { devtools } from "zustand/middleware";

export type State = {
  persons: Map<string, PersonType>;
  numberOfRenders: number;
  getPersons: () => void;
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
  increaseNumberOfRenders: () => void;
  asyncLoading: number;
  // beingFired: string[];
};

export const useStore = create<State>(
  devtools((set) => {
    return {
      asyncLoading: 0,
      persons: new Map(),
      numberOfRenders: 0,

      increaseNumberOfRenders: () => {
        set((state) => ({
          numberOfRenders: state.numberOfRenders + 1
        }));
      },

      getPersons: async () => {
        set((state) => ({
          asyncLoading: state.asyncLoading + 1
        }));

        const persons = await getPersons();
        set((state) => ({
          persons: new Map(persons.map((p) => [p.id, p])),
          asyncLoading: state.asyncLoading - 1
        }));
      },
      hirePerson: (person) => {
        set((state) =>
          produce(state, (draft) => {
            draft.persons.set(person.id, person);
          })
        );
      },
      firePerson: async (id) => {
        set((state) =>
          produce(state, (draft) => {
            draft.asyncLoading = draft.asyncLoading + 1;
            const p = draft.persons.get(id);
            if (!p) {
              return;
            }

            p.isBeingFired = true;
          })
        );

        const fired = await firePerson(id);

        set((state) =>
          produce(state, (draft) => {
            draft.persons.delete(fired.id);
            draft.asyncLoading = draft.asyncLoading - 1;
          })
        );
      }
    };
  })
);
