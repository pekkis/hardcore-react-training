import axios from "axios";
import { getBaseUrl } from "./instance";

export type MarkdownBlockType = {
  type: "markdown";
  text: string;
};

export type HeadingBlockType = {
  type: "heading";
  level: number;
  text: string;
};

export type ImageBlockType = {
  type: "image";
  alt: string;
  url: string;
};

export type ContentBlockType =
  | MarkdownBlockType
  | HeadingBlockType
  | ImageBlockType;

export type QuarticleAuthor = {
  id: string;
  firstName: string;
  lastName: string;
};

export type QuarticlePriority = "high" | "normal";

export type QuarticleType = {
  id: string;
  mainImage: string;
  publishedAt: string;
  author: QuarticleAuthor;
  priority: QuarticlePriority;
  headline: string;
  lead: string;
  content: ContentBlockType[];
};

export type GetQuarticlesResponse = {
  quarticles: QuarticleType[];
  totalQuarticles: number;
};

export const getQuarticles = async (
  offset = 0,
  limit = 0
): Promise<GetQuarticlesResponse> => {
  const ret = await axios.get<GetQuarticlesResponse>(
    `${getBaseUrl()}/quarticle`,
    {
      params: {
        offset,
        limit
      }
    }
  );
  return ret.data;
};

export const getQuarticle = async (id: string): Promise<QuarticleType> => {
  const ret = await axios.get<QuarticleType>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.data;
};
