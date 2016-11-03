import R from 'ramda';

const defaultState = {
  userAgent: undefined,
  statusCode: 200,
};

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
      return R.assoc('userAgent', payload, state);

    case 'SERVER_SET_STATUS_CODE':
      return R.assoc('statusCode', payload, state);

    default:
      return state;
  }
}
