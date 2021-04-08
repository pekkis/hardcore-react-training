import { assoc, dec, dissoc, inc, indexBy, prop } from "ramda";
import create from "zustand";
import { PersonInterface } from "../types";
import personService from "./person";
import produce from "immer";

type RootState = {
  persons: Record<string, PersonInterface>;
  loading: number;
  hirePerson: (person: Omit<PersonInterface, "id" | "age">) => void;
  firePerson: (id: string) => void;
  getPersons: () => void;
};

const useStore = create<RootState>((set) => ({
  persons: {},
  loading: 0,
  hirePerson: async (person: Omit<PersonInterface, "id" | "age">) => {
    set((state) => ({
      loading: state.loading + 1
    }));

    const hired = await personService.hirePerson(person);

    set((state) => ({
      persons: assoc(hired.id, hired, state.persons),
      loading: state.loading - 1
    }));

    // set((state) => ({ persons: state.persons.concat(hired) }));
  },
  firePerson: async (id: string) => {
    set((state) =>
      produce(state, (draft) => {
        draft.loading = draft.loading + 1;
        draft.persons[id].isBeingFired = true;
      })
    );

    set((state) => ({
      loading: state.loading + 1
    }));

    const fired = await personService.firePerson(id);
    set((state) => ({
      persons: dissoc(fired.id, state.persons),
      loading: state.loading - 1
    }));
  },
  getPersons: async () => {
    set((state) => ({
      loading: state.loading + 1
    }));

    const persons = await personService.getPersons();

    set((state) => ({
      persons: indexBy(prop("id"), persons),
      loading: state.loading - 1
    }));
  }
}));

export default useStore;
