import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  birthDay: string;
};

// var, let, const

export const getDucks = async (): Promise<DuckType[]> => {
  const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
  return ret.data;
};
