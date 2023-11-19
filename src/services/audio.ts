import axios from "axios";
import { getBaseUrl } from "./instance";

export type QuackCastAudio = {
  title: string;
  url: string;
  description: string;
  attribution: string;
};

export const getQuackCast = async (): Promise<QuackCastAudio> => {
  const ret = await axios.get<QuackCastAudio>(`${getBaseUrl()}/audio`);
  return ret.data;
};
