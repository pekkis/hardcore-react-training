import axios from "axios";
import { getBaseUrl } from "./instance";

export type HeadingBlock = {
  type: "heading";
  level: number;
  text: string;
};

export type MarkdownBlock = {
  type: "markdown";
  text: string;
};

export type ImageBlock = {
  type: "image";
  url: string;
  alt: string;
  description: string;
};

export type ContentBlock = HeadingBlock | MarkdownBlock | ImageBlock;

export type Quarticle = {
  id: string;
  appId: string;
  publishedAt: string;
  headline: string;
  lead: string;
  mainImage: string;
  author: {
    firstName: string;
    lastName: string;
    id: string;
  };
  content: ContentBlock[];
};

export const getQuarticle = async (id: string): Promise<Quarticle> => {
  const ret = await axios.get<Quarticle>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.data;
};

export const getQuarticles = async (
  offset = 0,
  limit = 0
): Promise<Quarticle[]> => {
  const ret = await axios.get<Quarticle[]>(`${getBaseUrl()}/quarticle`);
  return ret.data;
};

export const postComment = async (articleId: string) => {
  const rawComment = {
    email: "pekkisx@gmail.com",
    comment: "bibbidi bobbidi buu"
  };

  const ret = await axios.post(
    `${getBaseUrl()}/quarticle/${articleId}/comment`,
    rawComment
  );

  return ret.data;
};

export const getComments = async (articleId: string) => {
  const ret = await axios.get(`${getBaseUrl()}/quarticle/${articleId}/comment`);

  return ret.data;
};

export const removeComment = async (articleId: string, commentId: string) => {
  const ret = await axios.delete(
    `${getBaseUrl()}/quarticle/${articleId}/comment/${commentId}`
  );

  return ret.data;
};
