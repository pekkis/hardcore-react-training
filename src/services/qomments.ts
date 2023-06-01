import axios from "axios";
import { getBaseUrl } from "./instance";
import { sortBy } from "ramda";

export type NewQommentType = {
  email: string;
  comment: string;
};

export type QommentType = NewQommentType & {
  id: string;
  appId: string;
  articleId: string;
  publishedAt: string;
};

export const postQomment = async (
  quarticleId: string,
  qomment: NewQommentType
): Promise<QommentType> => {
  const ret = await axios.post<QommentType>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`,
    qomment
  );

  return ret.data;
};

export const getQomments = async (
  quarticleId: string
): Promise<QommentType[]> => {
  const ret = await axios.get<QommentType[]>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`
  );

  //  sort the god damn commeeeeents, just a quick kludgero
  // import { sortBy } from "ramda";
  const sorted = sortBy((q) => q.publishedAt, ret.data);
  return sorted.reverse();
};
