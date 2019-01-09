import axios from "axios";

// import { getPersons } from "./services/person"

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log("errore fatale", e);
    throw e;
  }
};

const firePerson = async id => {
  await axios.delete(`${process.env.REACT_APP_API}/person/${id}`);
  return id;
};

export default {
  getPersons,
  firePerson
};
