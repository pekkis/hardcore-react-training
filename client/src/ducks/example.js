import { List, Map } from 'immutable';

const defaultState = Map({
  example: 'value',
  examples: List.of(
    'eka',
    'toka',
    'koli',
    'neli',
  )
});

export function setExample(value) {
  return {
    type: 'SET_EXAMPLE',
    payload: 'lusso',
  };
}

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'SET_EXAMPLE':
      return state.set('example', payload);

    default:
      return state;
  }
}
