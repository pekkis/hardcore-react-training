import { getBaseUrl } from "./instance";
import axios from "axios";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  relatedToCEO: boolean;
  gender: 0 | 1 | 2;
  birthDay: string;
  salary: number;
  isAdmin: boolean;
  wingedness: "l" | "r";
  migratesForWinters: boolean;
  isCannibal: boolean;
  email: string;
  isBeingFired?: boolean;
};

export type DuckProspectType = Omit<DuckType, "age">;

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  const ret = await axios.post<DuckType>(`${getBaseUrl()}/duck`, prospect);
  return ret.data;
};

export const fireDuck = async (id: DuckType["id"]): Promise<DuckType> => {
  const ret = await axios.delete<DuckType>(`${getBaseUrl()}/duck/${id}`);
  return ret.data;
};

export const getDucks = async (): Promise<DuckType[]> => {
  const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
  return ret.data;
};

export const getDuck = async (id: string): Promise<DuckType> => {
  const ret = await axios.get<DuckType>(`${getBaseUrl()}/duck/${id}`);
  return ret.data;
};
