import { Dispatch, useContext } from "react";
import produce from "immer";
import { createContext, useReducer } from "react";
import { PersonType } from "../components/App";

type Action =
  | { type: "FIRE_PERSON"; payload: string }
  | { type: "HIRE_PERSON"; payload: PersonType }
  | { type: "GET_PERSONS" }
  | { type: "GET_PERSONS_PENDING" }
  | { type: "GET_PERSONS_REJECTED"; error: true; payload: Error }
  | { type: "GET_PERSONS_FULFILLED"; payload: PersonType[] };

type State = {
  persons: PersonType[];
  numberOfRenders: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "HIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons.push(action.payload);
      });

    case "FIRE_PERSON":
      return produce(state, (draft) => {
        draft.persons = draft.persons.filter((p) => p.id !== action.payload);
      });

    case "GET_PERSONS_FULFILLED":
      return produce(state, (draft) => {
        draft.persons = action.payload;
      });

    default:
      return state;
  }
};

type PeduxContextState = {
  dispatch: Dispatch<Action>;
  state: State;
};

const PeduxContext = createContext<PeduxContextState>({});

export const PeduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    persons: {},
    numberOfRenders: 0
  });

  return (
    <PeduxContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </PeduxContext.Provider>
  );
};

export const usePedux = (): [State, Dispatch<Action>] => {
  const pedux = useContext(PeduxContext);

  return [pedux.state, pedux.dispatch];
};

export const useSelector = (func) => {
  const pedux = useContext(PeduxContext);
  return func(pedux.state);
};
