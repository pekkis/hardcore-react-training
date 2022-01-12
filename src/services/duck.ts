import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckGenderType = 0 | 1 | 2;

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  gender: DuckGenderType;
  age: number;
};

export const getDucks = async (): Promise<DuckType[]> => {
  const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
  return ret.data;
};
