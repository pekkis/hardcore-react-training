import { ContentBlockType } from "@/services/quarticle";
import { FC } from "react";
import * as styles from "./UnknownBlock.css";

type Props = {
  block: ContentBlockType;
};

const UnknownBlock: FC<Props> = ({ block }) => {
  return <div className={styles.block}>{JSON.stringify(block)}</div>;
};

export default UnknownBlock;
