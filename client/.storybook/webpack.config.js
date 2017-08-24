// This kludge is required because Storybook don't do babel version of config.
require('babel-register');
module.exports = require('./webpack.config.babel.js');
