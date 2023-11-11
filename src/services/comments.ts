import axios from "axios";
import { getBaseUrl } from "./instance";

import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string().min(10),
  email: z.string().email()
});

export type NewCommentType = z.infer<typeof commentSchema>;

export type CommentType = NewCommentType & {
  id: string;
  publishedAt: string;
};

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
