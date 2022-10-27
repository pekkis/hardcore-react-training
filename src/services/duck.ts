import axios from "axios";
import { getBaseUrl } from "./instance";

/*
{
"birthDay": "2018-01-18",
"firstName": "Brenda",
"lastName": "Schroeder",
"wingedness": "r",
"isCannibal": false,
"id": "075f77c2-3d97-49f9-ae76-bf820628cef5",
"gender": 1,
"salary": 6971,
"isAdmin": false,
"migratesForWinters": true,
"password": "$2a$04$LLa04uiXGK1zSHAJZHVAH.6e6XGDHY7tp3X9xsz158eBjlwMjsITW",
"relatedToCEO": true,
"email": "Delilah_Welch18@yahoo.com"
}
*/

export type DuckType = {
  id: string;
  birthDay: string;
  wingedness: "r" | "l";
  email: string;
  salary: number;
  isAdmin: boolean;
  firstName: string;
  lastName: string;
  age: number;
  gender: 0 | 1 | 2;
  migratesForWinters: boolean;
  isCannibal: boolean;
  relatedToCEO: boolean;
  isBeingFired?: boolean;
};

export type DuckProspectType = Omit<DuckType, "age">;

export const getDucks = async (): Promise<DuckType[]> => {
  const response = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
  return response.data;
};

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  const response = await axios.post<DuckType>(`${getBaseUrl()}/duck`, prospect);
  return response.data;
};

export const fireDuck = async (id: string): Promise<DuckType> => {
  const response = await axios.delete<DuckType>(`${getBaseUrl()}/duck/${id}`);
  return response.data;
};
