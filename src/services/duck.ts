import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  birthDay: string;
  gender: 0 | 1 | 2;
  migratesForWinters: boolean;
  relatedToCEO: boolean;
};

export type DuckProspectType = Omit<DuckType, "age">;

// var, let, const

export const getDucks = async (): Promise<DuckType[]> => {
  const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
  return ret.data;
};

export const hireDuck = async (duck: DuckProspectType): Promise<DuckType> => {
  const ret = await axios.post<DuckType>(`${getBaseUrl()}/duck`, duck);
  return ret.data;
};

export const fireDuck = async (id: string): Promise<DuckType> => {
  const ret = await axios.delete<DuckType>(`${getBaseUrl()}/duck/${id}`);
  return ret.data;
};

export default {
  getDucks,
  hireDuck,
  fireDuck
};
