import { create } from "zustand";

type User = {
  name: string;
  age: number;
};

type State = {
  user: User;
  setUser: (user: User) => void;
};

export const useExampleStore = create<State>((set) => {
  return {
    setUser: (user) => {
      set({
        user
      });
    },

    user: {
      name: "Anomuumi",
      age: 666
    }
  };
});
