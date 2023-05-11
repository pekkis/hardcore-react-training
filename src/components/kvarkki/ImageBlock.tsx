import { ImageBlock } from "@/services/quarticle";
import { FC } from "react";
import { imageClass } from "./ImageBlock.css";

type Props = {
  block: ImageBlock;
};

const ImageBlock: FC<Props> = ({ block }) => {
  return (
    <div>
      <img className={imageClass} alt={block.alt} src={block.url} />
    </div>
  );
};

export default ImageBlock;
