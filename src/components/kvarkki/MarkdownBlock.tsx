import { MarkdownBlock } from "@/services/quarticle";
import { FC } from "react";
import Markdown from "markdown-to-jsx";

type Props = {
  block: MarkdownBlock;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return <Markdown options={{ forceBlock: true }}>{block.text}</Markdown>;
};

export default MarkdownBlock;
