"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import VideoPlayer from "./VideoPlayer";

type Props = {
  videos: QuackTubeVideo[];
};

const VideoSelector: FC<Props> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const video = videos[currentVideo];

  return (
    <div>
      <ul>
        {videos.map((video, i) => {
          return (
            <li key={video.title}>
              <button
                type="button"
                onClick={() => {
                  setCurrentVideo(i);
                }}
              >
                {video.title}
              </button>
            </li>
          );
        })}
      </ul>

      <VideoPlayer key={video.url} src={video.url} type={video.type} />

      <div>{video.description}</div>
    </div>
  );
};

export default VideoSelector;
