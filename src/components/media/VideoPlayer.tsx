"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import Video from "./Video";
import Markdown from "../Markdown";
import Button from "../duck-ui/Button";

type Props = {
  videos: QuackTubeVideo[];
};

const VideoPlayer: FC<Props> = ({ videos }) => {
  const [index, setIndex] = useState(0);
  const video = videos[index];

  return (
    <div>
      {videos.map((video, i) => {
        return (
          <Button
            key={video.title}
            onClick={() => {
              setIndex(i);
            }}
          >
            {video.title}
          </Button>
        );
      })}

      <Video source={video.url} />

      <Markdown>{video.description}</Markdown>
    </div>
  );
};

export default VideoPlayer;
