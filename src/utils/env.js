import { Map } from 'immutable';

export function getEnvironmentVariables() {
  return Map(process.env)
    .filter((v, k) => k === 'NODE_ENV' || k.startsWith('REACT_APP_'))
    .map((v, k) => JSON.stringify(v))
    .toJS();
}
