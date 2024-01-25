import axios from "axios";
import { getBaseUrl } from "./instance";

export type QuackTubeVideo = {
  title: string;
  url: string;
  attribution: string;
  description: string;
  type: string;
};

export const getVideos = async (): Promise<QuackTubeVideo[]> => {
  const ret = await axios.get<QuackTubeVideo[]>(`${getBaseUrl()}/video`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ret.data);
    }, 2000);
  });

  return ret.data;
};
