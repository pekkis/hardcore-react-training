const { Map } = require('immutable');

function getEnvironmentVariables() {
  return Map(process.env)
    .filter((v, k) => k === 'NODE_ENV' || k.startsWith('REACT_APP_'))
    .map((v, k) => JSON.stringify(v))
    .toJS();
}

module.exports = {
  getEnvironmentVariables,
};
