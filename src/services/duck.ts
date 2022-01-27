import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckProspectType = Omit<DuckType, "age">;

export type DuckType = {
  id: string;
  gender: 0 | 1 | 2;
  firstName: string;
  lastName: string;
  age: number;
  birthDay: string;
  isAdmin: boolean;
  email: string;
  migratesForWinters: boolean;
  wingedness: "l" | "r";
  relatedToCEO: boolean;
  isBeingFired?: boolean;
};

export const fireDuck = async (id: DuckType["id"]): Promise<DuckType> => {
  try {
    const ret = await axios.delete<DuckType>(`${getBaseUrl()}/duck/${id}`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  try {
    const ret = await axios.post<DuckType>(`${getBaseUrl()}/duck`, prospect);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getDucks = async (): Promise<DuckType[]> => {
  try {
    const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);
    return ret.data;
  } catch (e) {
    console.log(e);
    throw e;
  }

  /*
  const p = new Promise((resolve, reject) => {
    axios
      .get(`${getBaseUrl()}/duck`)
      .then((ret) => {
        resolve(ret.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
  return p;
  */
};

export default {
  getDucks,
  hireDuck,
  fireDuck
};
