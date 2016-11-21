import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import path from 'path';
import util from 'util';
import bodyParser from 'body-parser';
import cors from 'cors';
import personService from './services/person';

createServer(config, webpackConfig, (app, httpServer, devMiddleware) => {

  app.use(cors());
  app.set('json spaces', 2);
  app.use(bodyParser.json());

  const persons = Array
    .from('tussiposkidsudsgiusdgiudsgiugiugiu')
    .map(personService.generatePerson);

  app.get('/person', (req, res) => {
    setTimeout(() => {
      res.send(persons);
    }, 500);
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
