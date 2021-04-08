export type GenderType = 0 | 1 | 2;
export interface PersonInterface {
  id: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  handedness?: "l" | "r";
  email?: string;
  isAdmin: boolean;
  relatedToCEO?: boolean;
  salary?: number;
  age: number;
  gender: GenderType;
  isBeingFired?: boolean;
}
