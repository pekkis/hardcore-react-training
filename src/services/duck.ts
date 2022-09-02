import axios from "axios";
import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 0 | 1 | 2;
  migratesForWinters: boolean;
  wingedness: "r" | "l";
  birthDay: string;
};

export type DuckProspectType = Omit<DuckType, "age">;

export const getDucks = async (): Promise<DuckType[]> => {
  try {
    const ret = await axios.get<DuckType[]>(`${getBaseUrl()}/duck`);

    console.log("BLUU", ret.data);
    return ret.data;
  } catch (e) {
    console.error(e, "ERRORE");
    throw e;
  }
};

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  const hiredDuck: DuckType = {
    ...prospect,
    age: 4.99
  };

  return hiredDuck;
};

export const fireDuck = async (id: string): Promise<void> => {
  return;
};

/*
export default {
  hireDuck,
  getDucks,
  fireDuck
};
*/
