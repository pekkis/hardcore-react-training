import { Map } from 'immutable';

const defaultState = Map({
  userAgent: undefined,
  statusCode: 200,
});

export function setUserAgent(userAgent) {
  return {
    type: 'SERVER_SET_USERAGENT',
    payload: userAgent,
  };
}

export function setStatusCode(statusCode) {
  return {
    type: 'SERVER_SET_STATUS_CODE',
    payload: statusCode,
  };
}

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SERVER_SET_USERAGENT':
      return state.set('userAgent', payload);

    case 'SERVER_SET_STATUS_CODE':
      return state.set('statusCode', payload);

    default:
      return state;
  }
}
