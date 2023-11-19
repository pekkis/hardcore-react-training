/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import Player from "./Player";
import * as styles from "./Videos.css";
import Markdown from "../Markdown";

type Props = {
  videos: QuackTubeVideo[];
};

const Videos: FC<Props> = ({ videos }) => {
  const [index, setIndex] = useState(0);

  const video = videos[index];

  return (
    <div className={styles.videos}>
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

      <Player url={video.url} type={video.type} />
      <Markdown>{video.description}</Markdown>
    </div>
  );
};

export default Videos;
