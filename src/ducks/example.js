import { List, Map } from 'immutable';

const defaultState = Map({
  example: 'value',
});

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
