"use client";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { VideoPlayer } from "@/components/kvaaktube/VideoPlayer";
import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";

type Props = {
  videos: QuackTubeVideo[];
};

export const Videos: FC<Props> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<number>(0);

  return (
    <div>
      <ul>
        {videos.map((v, i) => {
          return (
            <li key={i} onClick={() => setSelectedVideo(i)}>
              {v.title}
            </li>
          );
        })}
      </ul>

      <VideoPlayer key={selectedVideo} video={videos[selectedVideo]} />
    </div>
  );
};
