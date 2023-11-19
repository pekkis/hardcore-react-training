import { AudioBlockType } from "@/services/quarticle";
import { FC } from "react";
import Player from "../quackcast/Player";

type Props = {
  block: AudioBlockType;
};

const AudioBlock: FC<Props> = ({ block }) => {
  return <Player clip={block} />;
};

export default AudioBlock;
