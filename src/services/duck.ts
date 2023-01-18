import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  isRelatedToCEO: boolean;
};

export const getDucks = async (): Promise<DuckType[]> => {
  console.log("getting da ducks");
  const response = await fetch(`${getBaseUrl()}/duck`);
  const ducks = (await response.json()) as DuckType[];
  return ducks;
};
