"use client";

/* eslint-disable jsx-a11y/media-has-caption */

import { QuackTubeVideo } from "@/services/video";
import { FC, useState } from "react";
import Video from "./Video";
import * as styles from "./QuackTube.css";

type Props = {
  videos: QuackTubeVideo[];
};

const InnerQuackTube: FC<Props> = ({ videos }) => {
  const [selected, setSelected] = useState(0);
  const video = videos[selected];

  return (
    <div>
      <h2>QuackTube</h2>

      <ul>
        {videos.map((video, i) => {
          return (
            <li
              key={video.title}
              onClick={() => {
                setSelected(i);
              }}
            >
              {video.title}
            </li>
          );
        })}
      </ul>

      <div className={styles.video}>
        <Video source={video.url} />
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default InnerQuackTube;
