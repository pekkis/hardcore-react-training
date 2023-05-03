import axios from "axios";
import { getBaseUrl } from "./instance";

export type Quarticle = {
  id: string;
  headline: string;
  lead: string;
};

export const getQuarticles = async (): Promise<Quarticle[]> => {
  const ret = await axios.get<Quarticle[]>(`${getBaseUrl()}/quarticle`);
  return ret.data;
};
