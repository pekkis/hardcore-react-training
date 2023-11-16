"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import Video from "./Video";
import Markdown from "../Markdown";

type Props = {
  videos: QuackTubeVideo[];
};

const VideoPlayer: FC<Props> = ({ videos }) => {
  const [index, setIndex] = useState(0);

  const video = videos[0];

  return (
    <div>
      <Video source={video.url} />

      <Markdown>{video.description}</Markdown>
    </div>
  );
};

export default VideoPlayer;
