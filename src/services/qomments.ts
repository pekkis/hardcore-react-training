import axios from "axios";
import { getBaseUrl } from "./instance";

export type QommentType = unknown;
export type NewQommentType = unknown;

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

  return ret.data;
};
