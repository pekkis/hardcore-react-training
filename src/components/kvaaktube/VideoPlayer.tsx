/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { QuackTubeVideo } from "@/services/video";
import { FC, useEffect, useRef, useState } from "react";
import * as styles from "./VideoPlayer.css";
import { Markdown } from "@/components/Markdown";

type Props = {
  video: QuackTubeVideo;
};

export const VideoPlayer: FC<Props> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("HIP HURRAA VIDEO MOUNT");

    return () => {
      console.log("UNMOUNT VIDEO");
    };
  }, []);

  return (
    <div className={styles.container}>
      <video
        autoPlay={false}
        ref={videoRef}
        className={styles.container}
        src={video.url}
        onPause={() => {
          setIsPlaying(false);
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onTimeUpdate={() => {
          const progress =
            videoRef.current!.currentTime / videoRef.current!.duration;

          setProgress(progress * 100);
        }}
      />

      <button
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <progress value={progress} max="100"></progress>

      <Markdown>{video.description}</Markdown>
    </div>
  );
};
