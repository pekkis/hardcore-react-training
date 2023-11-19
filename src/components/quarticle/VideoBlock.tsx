import { VideoBlockType } from "@/services/quarticle";
import { FC } from "react";
import Player from "../quacktube/Player";

type Props = {
  block: VideoBlockType;
};

const VideoBlock: FC<Props> = ({ block }) => {
  return <Player url={block.url} type={block.videoType} />;
};

export default VideoBlock;
