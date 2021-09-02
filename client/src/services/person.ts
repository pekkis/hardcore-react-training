import axios from "axios";
import envVar from "env-var";

// yup, zod

export type GenderType = 0 | 1 | 2;

export type PersonType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderType;
  isBeingFired?: boolean;
};

const api = envVar.get("REACT_APP_API").required().asString();

export const getPersons = async (): Promise<PersonType[]> => {
  try {
    const ret = await axios.get<PersonType[]>(`${api}/person`);

    console.log(ret.data, "lubsendore");

    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const firePerson = async (id: string): Promise<PersonType> => {
  try {
    const ret = await axios.delete<PersonType>(`${api}/person/${id}`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
