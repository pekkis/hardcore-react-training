"use client";

import { ImageBlockType } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  block: ImageBlockType;
};

const ImageBlock: FC<Props> = ({ block }) => {
  return (
    <div>
      <img src={block.url} alt={block.alt} />
    </div>
  );
};

export default ImageBlock;
