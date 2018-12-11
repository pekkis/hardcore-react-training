import axios from "axios";

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    console.log("errore fatale", e);
    throw e;
  }

  /*
  const persons = axios
    .get(`${process.env.REACT_APP_API}/persons`)
    .then(ret => {
      return ret.data;
    })
    .catch(err => {
      console.log("errore fatale", e);
      throw e;
    });

  return persons;
  */
};

export default {
  getPersons
};
