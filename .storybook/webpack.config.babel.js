import { getCommonLoaders, getPostCss } from '../webpack.config.babel';

// Do NOT refactor as an export. Breaks the kludge required by Storybook.
module.exports = {
  module: {
    loaders: getCommonLoaders('development').toJS(),
  },
  postcss: getPostCss()
};
