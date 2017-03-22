import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import path from 'path';
import util from 'util';
import uuid from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors';
import faker from 'faker';
import { createPerson } from './services/personService';

const persons = Array
  .from('tussihovixxdsggsdgsdgdsdsgsdggsdsgdgsdgdgsdgsdx')
  .map(createPerson);

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {

  app.use(cors());
  app.set('json spaces', 2);
  app.use(bodyParser.json());

  app.get('/person', (req, res) => {
    setTimeout(() => {
      res.send(persons);
    }, 1000);
  });



  app.get('*', (req, res) => {
    const index = devMiddleware.fileSystem.readFileSync(
      path.join(webpackConfig.output.path, 'index.html')
    );
    res.end(index);
  });

  // app.get('*', proxy('localhost:' + (config.port + 1)));
  return Promise.resolve();
});
