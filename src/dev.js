import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import path from 'path';
import util from 'util';
import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import cors from 'cors';
import faker from 'faker';

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {

  app.use(cors());
  app.set('json spaces', 2);
  app.use(bodyParser.json());

  function generate() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
  }

  let persons = Array.from('lorem ipsum dolor sit amet sic transit gloria mundi los tussiposcos').map(a => {
    return generate();
  })

  app.get('/person', (req, res) => {
    res.send(persons);
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
