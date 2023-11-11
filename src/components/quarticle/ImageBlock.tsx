import { ImageBlockType } from "@/services/quarticle";
import { FC } from "react";
import * as styles from "./ImageBlock.css";

type Props = {
  block: ImageBlockType;
};

const ImageBlock: FC<Props> = ({ block }) => {
  return <img className={styles.image} alt={block.alt} src={block.url} />;
};

export default ImageBlock;
