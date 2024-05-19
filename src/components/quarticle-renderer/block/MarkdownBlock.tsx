import Markdown from "@/components/Markdown";
import { MarkdownBlockType } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  data: MarkdownBlockType;
};

const MarkdownBlock: FC<Props> = ({ data }) => {
  return (
    <div>
      <Markdown>{data.text}</Markdown>
    </div>
  );
};

export default MarkdownBlock;
