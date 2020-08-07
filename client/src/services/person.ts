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

export const hirePerson = async (
  person: PersonInterface
): Promise<PersonInterface[]> => {
  try {
    const ret = await axios.post<PersonInterface[]>(
      `${process.env.REACT_APP_API}/person`,
      person
    );
    return ret.data;
  } catch (e) {
    throw e;
  }
};

export const firePerson = async (id: string): Promise<boolean> => {
  try {
    await axios.delete<void>(`${process.env.REACT_APP_API}/person/${id}`);
    return true;
  } catch (e) {
    throw e;
  }
};

const personService = {
  getPersons,
  hirePerson,
  firePerson
};

export default personService;
