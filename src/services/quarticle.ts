import axios from "axios";
import { getBaseUrl } from "./instance";
import { z } from "zod";
import { descend, prop, sortWith } from "ramda";

export const qommentSchema = z.object({
  comment: z.string().min(10),
  email: z.string().email()
});

export type NewQommentType = z.infer<typeof qommentSchema>;

export type QommentType = {
  id: string;
  appId: string;
  email: string;
  comment: string;
  publishedAt: string;
};

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

export type QuarticleType = {
  id: string;
  headline: string;
  lead: string;
  mainImage: string;
  priority: "high" | "normal";
  publishedAt: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  content: ContentBlock[];
};

type QuarticleData = {
  quarticles: QuarticleType[];
  totalQuarticles: number;
};

const commentsSorter = sortWith<QommentType>([descend(prop("publishedAt"))]);

export const getQuarticles = async (
  offset = 0,
  limit = 25
): Promise<QuarticleType[]> => {
  const ret = await axios.get<QuarticleData>(`${getBaseUrl()}/quarticle`, {
    params: {
      offset,
      limit
    }
  });
  return ret.data.quarticles;
};

export const getQuarticle = async (id: string): Promise<QuarticleType> => {
  const ret = await axios.get<QuarticleType>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.data;
};

export const getComments = async (
  appId: string,
  articleId: string
): Promise<QommentType[]> => {
  const url = `${process.env.NEXT_PUBLIC_API}/${appId}/quarticle/${articleId}/comment`;

  const ret = await axios.get<QommentType[]>(url);
  return commentsSorter(ret.data);
};

export const postComment = async (
  appId: string,
  articleId: string,
  comment: NewQommentType
): Promise<QommentType> => {
  const url = `${process.env.NEXT_PUBLIC_API}/${appId}/quarticle/${articleId}/comment`;

  const ret = await axios.post<QommentType>(url, comment);
  return ret.data;
};
