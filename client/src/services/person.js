import axios from "axios";

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const hirePerson = async person => {
  const ret = await axios.post(`${process.env.REACT_APP_API}/person`, person);
  return ret.data;
};

const firePerson = async id => {
  const ret = await axios.delete(`${process.env.REACT_APP_API}/person/${id}`);
  return id;
};

export default {
  getPersons,
  hirePerson,
  firePerson
};
