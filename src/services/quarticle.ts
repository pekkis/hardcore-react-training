import axios from "axios";
import { getBaseUrl } from "./instance";

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
};

export const getQuarticles = async (): Promise<Quarticle[]> => {
  const ret = await axios.get<Quarticle[]>(`${getBaseUrl()}/quarticle`);
  return ret.data;
};

export const getQuarticle = async (id: string): Promise<Quarticle> => {
  const ret = await axios.get<Quarticle>(`${getBaseUrl()}/quarticle/${id}`);
  return ret.data;
};
