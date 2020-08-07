import produce from "immer";

export const INCREMENT_LOADING = "INCREMENT_LOADING";
export const DECREMENT_LOADING = "DECREMENT_LOADING";

interface IncrementLoadingAction {
  type: typeof INCREMENT_LOADING;
}

interface DecrementLoadingAction {
  type: typeof DECREMENT_LOADING;
}

type Actions = IncrementLoadingAction | DecrementLoadingAction;

export interface UIState {
  loading: number;
}

const defaultState: UIState = {
  loading: 0
};

export default function personReducer(
  state = defaultState,
  action: Actions
): UIState {
  switch (action.type) {
    case INCREMENT_LOADING:
      return produce(state, (draft) => {
        draft.loading = draft.loading + 1;
      });
    case DECREMENT_LOADING:
      return produce(state, (draft) => {
        draft.loading = draft.loading - 1;
      });

    default:
      return state;
  }
}
