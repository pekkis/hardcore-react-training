import axios from "axios";

export const getPersons = async () => {
  const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
  return ret.data;
};

export const firePerson = async (token, id) => {
  const ret = await axios.delete(`${process.env.REACT_APP_API}/person/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return ret.data.id;
};

export const hirePerson = async (token, person) => {
  const ret = await axios.post(`${process.env.REACT_APP_API}/person`, person, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  return ret.data;
};

export default {
  getPersons,
  hirePerson,
  firePerson
};
