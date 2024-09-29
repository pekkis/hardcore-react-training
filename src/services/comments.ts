import { getBaseUrl } from "./instance";

import { z } from "zod";
import ky from "ky";

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
  const ret = await ky.post<CommentType>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`,
    {
      json: comment
    }
  );

  return ret.json();
};

export const getComments = async (
  quarticleId: string
): Promise<CommentType[]> => {
  const ret = await ky.get<CommentType[]>(
    `${getBaseUrl()}/quarticle/${quarticleId}/comment`,
    {
      retry: 0
    }
  );

  return ret.json();
};
