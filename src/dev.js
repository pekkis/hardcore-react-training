import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {
  app.use(cors());
  app.set('json spaces', 2);
  app.use(bodyParser.json());

  const persons = [];

  app.get('/api/person', (req, res) => {
    res.send(persons);
  });

  app.get('*', (req, res) => {
    const index = devMiddleware.fileSystem.readFileSync(
      path.join(webpackConfig.output.path, 'index.html'),
    );
    res.end(index);
  });
  return Promise.resolve();
});
