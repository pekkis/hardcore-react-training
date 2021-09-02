import create from "zustand";
import { getPersons, PersonType } from "./person";

// import produce from "immer";
// import { devtools } from "zustand/middleware";

export type State = {
  persons: PersonType[];
  numberOfRenders: number;
  getPersons: () => void;
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
  increaseNumberOfRenders: () => void;
};

export const useStore = create<State>((set) => {
  return {
    persons: [],
    numberOfRenders: 0,

    increaseNumberOfRenders: () => {
      set((state) => ({
        numberOfRenders: state.numberOfRenders + 1
      }));
    },

    getPersons: async () => {
      const persons = await getPersons();
      set({
        persons
      });
    },
    hirePerson: (person) => {
      // make a "real" hire if time left.
      set((state) => ({
        persons: state.persons.concat(person)
      }));
    },
    firePerson: (id) => {
      set((state) => ({
        persons: state.persons.filter((p) => p.id !== id)
      }));
    }
  };
});
