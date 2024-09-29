import ky from "ky";
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

export type QuestionBlockType = {
  type: "question";
  questionId: string;
  question: string;
  answers: string[];
  correctAnswer: number;
};

export type AudioBlockType = {
  type: "audio";
  url: string;
  title: string;
  description: string;
  attribution: string;
};

export type VideoBlockType = {
  type: "video";
  url: string;
  title: string;
  description: string;
  videoType: string;
  attribution: string;
};

export type ContentBlockType =
  | MarkdownBlockType
  | HeadingBlockType
  | ImageBlockType
  | VideoBlockType
  | AudioBlockType
  | QuestionBlockType;

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
  const ret = await ky.get<GetQuarticlesResponse>(`${getBaseUrl()}/quarticle`, {
    retry: 0,
    timeout: 60000,
    searchParams: {
      offset,
      limit
    }
  });
  return ret.json();
};

export const getQuarticle = async (id: string): Promise<QuarticleType> => {
  const ret = await ky.get<QuarticleType>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.json();
};
