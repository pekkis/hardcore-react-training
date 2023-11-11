import { ContentBlockType } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  block: ContentBlockType;
};

const UnknownBlock: FC<Props> = ({ block }) => {
  return <div>{JSON.stringify(block)}</div>;
};

export default UnknownBlock;
