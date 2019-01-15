import axios from "axios";

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }

  /*
  const ret = axios
    .get(`${process.env.REACT_APP_API}/person`)
    .then(ret => ret.data)
    .catch(e => {
      console.log(e, "error");
      throw e;
    });
  return ret;
  */
};

const firePerson = async id => {
  await axios.delete(`${process.env.REACT_APP_API}/person/${id}`);
  return id;
};

export const hirePerson = async person => {
  const ret = await axios.post(`${process.env.REACT_APP_API}/person`, person);
  return ret.data;
};

export default {
  getPersons,
  firePerson,
  hirePerson
};
