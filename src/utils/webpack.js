import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
