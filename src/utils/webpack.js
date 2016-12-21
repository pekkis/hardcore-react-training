import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function getStyleLoader(env, target, base) {

  const ret = {
    ...base,
  };

  switch (env) {

    case 'development':
      if (target === 'browser') {
        ret.loader = [
          'style-loader',
          ...ret.loader,
        ];
      }
      break;

    case 'production':
      if (target === 'browser') {
        ret.loader = ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: base.loader,
        });
      }
      break;
  }
  return ret;
}
