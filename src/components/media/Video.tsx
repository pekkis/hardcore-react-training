/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { FC, useRef, useState } from "react";
import * as styles from "./Video.css";

import { FaPlay, FaPause } from "react-icons/fa";

type Props = {
  source: string;
};

const Video: FC<Props> = ({ source }) => {
  const ref = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState<number | undefined>();
  const [duration, setDuration] = useState<number | undefined>(undefined);

  const progress = duration && time ? (time / duration) * 100 : 0;

  return (
    <div>
      <video
        className={styles.video}
        ref={ref}
        onTimeUpdate={() => {
          setTime(ref.current?.currentTime);
        }}
        onDurationChange={() => {
          setDuration(ref?.current?.duration);
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onEnded={() => {
          setIsPlaying(false);
        }}
      >
        <source src={source} type="video/webm" />
      </video>
      <div>
        <button
          onClick={() => {
            if (ref.current?.paused) {
              return ref.current?.play();
            }

            return ref.current?.pause();
          }}
        >
          {!isPlaying ? <FaPlay /> : <FaPause />}
        </button>
        <progress max="100" value={progress} />
      </div>
    </div>
  );
};

export default Video;
