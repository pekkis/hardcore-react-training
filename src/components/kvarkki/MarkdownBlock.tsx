import { MarkdownBlock } from "@/services/quarticle";
import { FC } from "react";
import Markdown from "react-markdown";

type Props = {
  block: MarkdownBlock;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return <Markdown>{block.text}</Markdown>;
};

export default MarkdownBlock;
