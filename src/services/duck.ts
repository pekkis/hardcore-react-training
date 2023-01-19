import { getBaseUrl } from "./instance";

/*
 email: "fake@email.com",
          salary: 0,
          isAdmin: false,
          birthDay: "2022-07-01",
          wingedness: "r",
          gender: 0,
          migratesForWinters: false,
          isCannibal: true,
          relatedToCEO: true
          */

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
  // lus: "foo" | "bar" | "lus";
};

export type DuckProspectType = Omit<DuckType, "age">;

export const hireDuck = async (
  prospect: DuckProspectType
): Promise<DuckType> => {
  const response = await fetch(`${getBaseUrl()}/duck`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(prospect)
  });

  if (!response.ok) {
    const json = await response.json();
    console.log(json);
    throw new Error("Hiring failed!");
  }

  const hiredDuck = (await response.json()) as DuckType;
  return hiredDuck;
};

export const fireDuck = async (id: DuckType["id"]): Promise<DuckType> => {
  const response = await fetch(`${getBaseUrl()}/duck/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });

  if (!response.ok) {
    const json = await response.json();
    console.log(json);
    throw new Error("Hiring failed!");
  }

  const firedDuck = (await response.json()) as DuckType;
  return firedDuck;
};

export const getDucks = async (): Promise<DuckType[]> => {
  console.log("getting da ducks");
  const response = await fetch(`${getBaseUrl()}/duck`);
  const ducks = (await response.json()) as DuckType[];

  return ducks;
};
