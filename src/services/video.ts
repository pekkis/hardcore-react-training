import ky from "ky";
import { getBaseUrl } from "./instance";

export type QuackTubeVideo = {
  title: string;
  url: string;
  attribution: string;
  description: string;
  type: string;
};

export const getVideos = async (): Promise<QuackTubeVideo[]> => {
  const ret = await ky.get<QuackTubeVideo[]>(`${getBaseUrl()}/video`, {
    retry: 0
  });
  return ret.json();
};
