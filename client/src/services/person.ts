import axios from "axios";
import { PersonInterface } from "../types";
import env from "env-var";
import { ascend, descend, sortWith } from "ramda";

const API = env.get("REACT_APP_API").required().asString();

const getPersons = async (): Promise<PersonInterface[]> => {
  const ret = await axios.get<PersonInterface[]>(`${API}/person`);
  return ret.data;
};

const hirePerson = async (
  person: Omit<PersonInterface, "id" | "age">
): Promise<PersonInterface> => {
  const ret = await axios.post<PersonInterface>(`${API}/person`, person);
  return ret.data;
};

const firePerson = async (id: string): Promise<PersonInterface> => {
  const ret = await axios.delete<PersonInterface>(`${API}/person/${id}`);
  return ret.data;
};

export const sortByName = sortWith<PersonInterface>([
  ascend((p) => p.lastName),
  ascend((p) => p.firstName)
]);

const personService = {
  getPersons,
  hirePerson,
  firePerson
};

export default personService;
