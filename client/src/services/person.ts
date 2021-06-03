import axios from "axios";
import env from "env-var";
import { PersonType } from "../components/App";

const prefix = env.get("REACT_APP_API").asString();

export const getPersons = async (): Promise<PersonType[]> => {
  try {
    const response = await axios.get<PersonType[]>(`${prefix}/person`);
    return response.data;
  } catch (e) {
    console.log(e, "oh noes");
    throw e;
  }
};

export const firePerson = async (id): Promise<PersonType> => {
  try {
    const response = await axios.delete<PersonType>(`${prefix}/person/${id}`);
    return response.data;
  } catch (e) {
    console.log(e, "oh noes");
    throw e;
  }
};

export default {
  getPersons,
  firePerson
};
