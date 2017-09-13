import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Range } from 'immutable';
import personService from './services/person';

dotenv.config();

let persons = Range(1, 21).map(personService.createPerson).toList();

const app = express();
app.use(cors());

app.get('/person', function (req, res, next) {
  setTimeout(function() {
    res.json(persons);
  }, Math.random() * 2000);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
