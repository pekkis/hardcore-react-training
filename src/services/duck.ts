import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckGenderType = 0 | 1 | 2;

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  gender: DuckGenderType;
  age: number;
  migratesForWinters: boolean;
  birthDay: string;
  relatedToCEO: boolean;
  wingedness: "l" | "r";
  isAdmin: boolean;
  email: string;
  isBeingFired?: boolean;
};

export type DuckProspectType = Omit<DuckType, "age">;

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
