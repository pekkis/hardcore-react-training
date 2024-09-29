import { getBaseUrl } from "./instance";
import ky from "ky";

export type QuackCastAudio = {
  title: string;
  url: string;
  description: string;
  attribution: string;
};

export const getQuackCast = async (): Promise<QuackCastAudio> => {
  const ret = await ky.get<QuackCastAudio>(`${getBaseUrl()}/audio`, {
    retry: 0
  });
  return ret.json();
};
