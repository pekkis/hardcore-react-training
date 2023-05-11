import { HeadingBlock } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  block: HeadingBlock;
};

const HeadingBlock: FC<Props> = ({ block }) => {
  return <h2>{block.text}</h2>;
};

export default HeadingBlock;
