const defaultState = {
  loading: 0,
};

export default function genericReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'PERSON_GET_PERSONS_PENDING':
      return {
        ...state,
        loading: state.loading + 1,
      };

    case 'PERSON_GET_PERSONS_FULFILLED':
      return {
        ...state,
        loading: state.loading - 1,
      };

    default:
      return state;

  }

};
