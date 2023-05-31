import axios from "axios";
import { getBaseUrl } from "./instance";

type MarkdownBlock = {
  type: "markdown";
};

type HeadingBlock = {
  type: "heading";
};

type ImageBlock = {
  type: "image";
};

type ContentBlock = MarkdownBlock | HeadingBlock | ImageBlock;

export type QuarticleType = {
  id: string;
  mainImage: string;
  content: ContentBlock;
  lead: string;
  headline: string;
};

type GetQuarticlesResponse = {
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
