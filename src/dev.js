import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import { createPerson } from './services/personService';
import { random } from './utils/random';

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {
  app.use(cors());
  app.set('json spaces', 2);
  app.use(bodyParser.json());

  const persons = Array(50).fill().map(createPerson);

  app.get('/api/person', (req, res) => {
    setTimeout(() => {
      res.send(persons);
    }, random.integer(500, 5000));
  });

  app.get('*', (req, res) => {
    const index = devMiddleware.fileSystem.readFileSync(
      path.join(webpackConfig.output.path, 'index.html'),
    );
    res.end(index);
  });
  return Promise.resolve();
});
