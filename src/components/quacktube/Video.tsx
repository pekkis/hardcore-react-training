"use client";

/* eslint-disable jsx-a11y/media-has-caption */

import { FC, Fragment, useEffect, useRef, useState } from "react";
import * as styles from "./Video.css";

import { FaPlay, FaPause } from "react-icons/fa";

type Props = {
  source: string;
};

/*
 */

const Video: FC<Props> = ({ source }) => {
  console.log("SOURCE", source);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    videoRef.current?.load();
  }, [source]);

  /*
  useEffect(() => {
    if (!isPlaying) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, [isPlaying]);
  */

  return (
    <div>
      <video
        ref={videoRef}
        controls
        className={styles.video}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onTimeUpdate={(e) => {
          setProgress(
            (videoRef.current?.currentTime / videoRef?.current?.duration) * 100
          );
        }}
      >
        <source type="video/webm" src={source} />
      </video>
      <div>
        <button
          onClick={() => {
            if (videoRef?.current?.paused) {
              videoRef?.current?.play();
            } else {
              videoRef?.current?.pause();
            }
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <progress max="100" value={progress} />
      </div>
    </div>
  );
};

export default Video;
