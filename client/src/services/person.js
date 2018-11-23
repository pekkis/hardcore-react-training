import axios from "axios";

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    // it will never fail!
  }
};

const firePerson = async id => {
  await axios.delete(`${process.env.REACT_APP_API}/person/${id}`);
  return id;
};

const hirePerson = async person => {
  const ret = await axios.post(`${process.env.REACT_APP_API}/person`, person);
  return ret.data;
};

export default {
  getPersons,
  firePerson,
  hirePerson
};
