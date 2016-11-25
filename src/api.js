import uuid from 'node-uuid';
import bodyParser from 'body-parser';
import config from '../config.server';
import express from 'express';
import cors from 'cors';
import faker from 'faker';
import r from './utils/random';

const app = express();
app.use(cors());
app.set('json spaces', 2);
app.use(bodyParser.json());

function generate() {
  return {
    id: uuid.v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    title: faker.name.jobTitle(),
    email: faker.internet.email(),
    gender: r.pick(['m', 'f']),
  };
}

let persons = Array.from('lorem ipsum dolor sit amet sic transit gloria mundi los tussiposcos').map(a => {
  return generate();
})

console.log(persons);

app.get('/person', (req, res) => {
  res.send(persons);
});

  const port = config.port + 2;
  app.listen(port);
  console.log(`Listening at port ${port}`);
