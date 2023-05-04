import axios from "axios";
import { getBaseUrl } from "./instance";
import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string().min(10),
  email: z.string().email()
});

export type NewCommentType = z.infer<typeof commentSchema>;

export type CommentType = {
  id: string;
  appId: string;
  email: string;
  comment: string;
  publishedAt: string;
};

// type NewComment = Pick<Comment, "email" | "comment">;
// export type NewCommentType = Omit<CommentType, "id" | "appId" | "publishedAt">;

type ContentBlock = MarkdownBlock | ImageBlock | HeadingBlock;

export type MarkdownBlock = {
  type: "markdown";
  text: string;
};

export type ImageBlock = {
  type: "image";
  alt: string;
  description: string;
  url: string;
};

export type HeadingBlock = {
  type: "heading";
  text: string;
};

export type Quarticle = {
  id: string;
  headline: string;
  lead: string;
  mainImage: string;
  content: ContentBlock[];
  priority: "high" | "normal";
};

type QuarticleData = {
  quarticles: Quarticle[];
  totalQuarticles: number;
};

export const getQuarticles = async (): Promise<Quarticle[]> => {
  console.log(`${getBaseUrl()}/quarticle`);

  const ret = await axios.get<QuarticleData>(`${getBaseUrl()}/quarticle`);
  return ret.data.quarticles;
};

export const getQuarticle = async (id: string): Promise<Quarticle> => {
  const ret = await axios.get<Quarticle>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.data;
};

export const getComments = async (appId: string, articleId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/${appId}/quarticle/${articleId}/comment`;

  const ret = await axios.get<CommentType[]>(url);
  return ret.data;
};

export const postComment = async (
  appId: string,
  articleId: string,
  comment: NewCommentType
): Promise<CommentType> => {
  const url = `${process.env.NEXT_PUBLIC_API}/${appId}/quarticle/${articleId}/comment`;

  const ret = await axios.post<CommentType>(url, comment);
  return ret.data;
};
