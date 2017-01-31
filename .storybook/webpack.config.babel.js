import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import { List } from 'immutable';

const ENV = process.env.NODE_ENV;
const PATHS = {
  src: path.resolve(__dirname, '..', './src'),
  build: path.resolve(__dirname, '..', './dist'),
  modules: path.resolve(__dirname, '..', './node_modules'),
  test: path.resolve(__dirname, '..', './test')
};

export function getStyleLoader(env, target, base) {

  const ret = {
    ...base,
  };

  switch (env) {

    case 'development':
      if (target === 'browser') {
        ret.loaders = [
          'style-loader',
          ...ret.loaders,
        ];
      }
      break;

    case 'production':

      if (target === 'browser') {
        ret.loader = ExtractTextPlugin.extract(
          'style-loader',
          base.loaders
        );
        delete ret.loaders;
      }
      break;
  }
  return ret;
}

function getCommonLoaders(ENV) {
  return List([
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.p?css$/,
        include: [
          PATHS.src,
        ],
        loaders: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ),
    getStyleLoader(
      ENV,
      'browser',
      {
        test: /\.css$/,
        include: [
          PATHS.modules,
        ],
        loaders: [
          'css-loader'
        ]
      },
    ),
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loaders: [
        'file?name=[path][name]-[hash].[ext]',
        (ENV === 'production ') ? 'img?minimize&optimizationLevel=5&progressive=true' : 'img',
      ],
      include: [
        PATHS.src
      ]
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&name=[path][name]-[hash].[ext]',
      include: [
        PATHS.src,
        PATHS.modules
      ]
    }
  ]);
}

// Do NOT refactor as an export. Breaks the kludge required by Storybook.
module.exports = {
  module: {
    loaders: getCommonLoaders('development').toJS(),
  },
};
