import { getBaseUrl } from "./instance";

export type DuckType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  relatedToCEO: boolean;
  gender: 0 | 1 | 2;
  // lus: "foo" | "bar" | "lus";
};

export const getDucks = async (): Promise<DuckType[]> => {
  console.log("getting da ducks");
  const response = await fetch(`${getBaseUrl()}/duck`);
  const ducks = (await response.json()) as DuckType[];

  return ducks;
};
