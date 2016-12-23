import { Map } from 'immutable';

const defaultState = Map({
  status: undefined,
  fontsLoaded: Map(),
});

export function setStatus(status) {
  return {
    type: 'WEBFONT_SET_STATUS',
    payload: status,
  };
}

export function setFontStatus(font, variation, status) {
  return {
    type: 'WEBFONT_SET_FONT_STATUS',
    payload: {
      font,
      variation,
      status,
    },
  };
}

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'WEBFONT_SET_STATUS':
      return state.set('status', payload);

    case 'WEBFONT_SET_STATUS':
      return state.update('fontsLoaded', fontsLoaded =>
        fontsLoaded.set([payload.font, payload.variation], payload.status)
      );

    default:
      return state;
  }
}
