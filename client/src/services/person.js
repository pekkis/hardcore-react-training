import axios from 'axios';
import { List } from 'immutable';

const api = process.env.REACT_APP_API;

function getPersons() {
  return axios
    .get(`${api}/person`)
    .then(ret => ret.data)
    .then(persons => List(persons))
  ;
}

export default {
  getPersons,
};
