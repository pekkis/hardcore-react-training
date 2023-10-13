import axios from "axios";
import { getBaseUrl } from "./instance";

export type NewCommentType = unknown;

export type CommentType = unknown;

export const postComment = async (
  quarticleId: string,
  comment: NewCommentType
): Promise<CommentType> => {
  const ret = await axios.post<CommentType>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`,
    comment
  );

  return ret.data;
};

export const getComments = async (
  quarticleId: string
): Promise<CommentType[]> => {
  const ret = await axios.get<CommentType[]>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`
  );

  return ret.data;
};
