"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";

type Props = {
  videos: QuackTubeVideo[];
};

const Videos: FC<Props> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const video = videos[currentVideo];

  return (
    <div>
      <video controls>
        <source src={video.url} type={video.type} />
      </video>
    </div>
  );
};

export default Videos;
