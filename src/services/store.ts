import create from "zustand";
import { DuckProspectType, DuckType } from "./duck";

export type State = {
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

  fireDuck: async (id: string) => {},

  hireDuck: async (prospect: DuckProspectType) => {},

  getDucks: async () => {}
}));

export default useStore;
