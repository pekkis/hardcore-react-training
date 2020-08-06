import axios from "axios";
import { PersonInterface } from "../types";

export const getPersons = async (): Promise<PersonInterface[]> => {
  console.log(process.env, "env");
  try {
    const ret = await axios.get<PersonInterface[]>(
      `${process.env.REACT_APP_API}/person`
    );
    return ret.data;
  } catch (e) {
    throw e;
  }
};

const personService = {
  getPersons
};

export default personService;
