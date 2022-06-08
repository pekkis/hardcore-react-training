import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 0 | 1 | 2;
  migratesForWinters: boolean;
  birthDay: string;
  wingedness: "l" | "r";
  email: string;
  isAdmin: boolean;
  relatedToCEO: boolean;
};

export type DuckProspectType = Omit<DuckType, "age">;

export const getDucks = async (): Promise<DuckType[]> => {
  try {
    const ducks = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
    return ducks.data;
  } catch (e) {
    console.log("ERROR FETCHING DUX", e);
    throw e;
  }
};

export const fireDuck = async (id: string): Promise<DuckType> => {
  try {
    const ducks = await axios.delete<DuckType>(`${getBaseUrl()}/duck/${id}`);
    return ducks.data;
  } catch (e) {
    console.log("ERROR FETCHING DUX", e);
    throw e;
  }
};

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  try {
    const ducks = await axios.post<DuckType>(`${getBaseUrl()}/duck`, prospect);
    return ducks.data;
  } catch (e) {
    console.log("ERROR HIRING DUX", e);
    throw e;
  }
};

export default {
  getDucks,
  fireDuck
};
