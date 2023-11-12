"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import Paragraph from "../duck-ui/Paragraph";
import Player from "./Player";

type Props = {
  videos: QuackTubeVideo[];
};

const Videos: FC<Props> = ({ videos }) => {
  const [index, setIndex] = useState(0);

  const video = videos[index];

  return (
    <div>
      <ul>
        {videos.map((video, i) => {
          return (
            <ul key={i}>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(i);
                  }}
                >
                  {video.title}
                </a>
              </li>
            </ul>
          );
        })}
      </ul>

      <Player url={video.url} />
      <Paragraph>{video.description}</Paragraph>
    </div>
  );
};

export default Videos;
