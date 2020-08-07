export interface PersonInterface {
  id: string;
  firstName: string;
  lastName: string;
  birthday?: string;
  handedness?: "l" | "r";
  email?: string;
  isAdmin: boolean;
  relatedToCEO?: boolean;
  salary?: number;
  age: number;
  gender: "m" | "f";
  isBeingFired?: boolean;
}
