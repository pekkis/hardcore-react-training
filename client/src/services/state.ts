import produce from "immer";
import create from "zustand";
import personService, { PersonInterface } from "./person";

export type State = {
  persons: PersonInterface[];
  counter: number;
  loadingCount: number;

  incrementCounter: () => void;
  getPersons: () => void;
  hirePerson: (person: PersonInterface) => void;
  firePerson: (id: string) => void;
};

export const useStore = create<State>((set) => ({
  persons: [],
  counter: 0,
  loadingCount: 0,

  incrementCounter: () => {
    set((state) => ({
      counter: state.counter + 1
    }));
  },

  getPersons: async () => {
    set((state) => ({
      loadingCount: state.loadingCount + 1
    }));

    const persons = await personService.getPersons();

    set((state) => ({
      persons,
      loadingCount: state.loadingCount - 1
    }));
  },

  hirePerson: (person) => {
    set((state) => ({
      persons: state.persons.concat(person)
    }));
  },

  firePerson: async (id) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.persons.findIndex((p) => p.id === id);
        draft.persons[index].isBeingFired = true;
        draft.loadingCount = draft.loadingCount + 1;
      })
    );

    const fired = await personService.firePerson(id);

    return set((state) => ({
      persons: state.persons.filter((p) => p.id !== fired.id),
      loadingCount: state.loadingCount - 1
    }));
  }
}));
