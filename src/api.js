import uuid from 'uuid';
import bodyParser from 'body-parser';
import config from '../config.server';
import express from 'express';
import cors from 'cors';
import faker from 'faker';
import { generatePerson } from './utils/random';

const app = express();
app.use(cors());
app.set('json spaces', 2);
app.use(bodyParser.json());

const generator = generatePerson();

let persons = Array.from('lorem ipsum dolor sit amet sic transit gloria mundi los tussiposcos').map(generator);

console.log(persons);

app.get('/person', (req, res) => {
  res.send(persons);
});

  const port = config.port + 2;
  app.listen(port);
  console.log(`Listening at port ${port}`);
