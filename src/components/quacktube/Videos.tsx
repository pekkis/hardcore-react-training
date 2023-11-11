/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import usePageVisibility from "@/hooks/usePageVisibility";
import { QuackTubeVideo } from "@/services/video";
import { FC, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import * as styles from "./Videos.css";

type Props = {
  videos: QuackTubeVideo[];
};

const Videos: FC<Props> = ({ videos }) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [time, setTime] = useState<number | undefined>(undefined);
  const [duration, setDuration] = useState<number | undefined>(undefined);

  const playerRef = useRef<HTMLVideoElement>(null);

  const tabIsVisible = usePageVisibility();

  useEffect(() => {
    if (tabIsVisible) {
      return;
    }

    if (isPlaying) {
      playerRef.current?.pause();
    }
  }, [tabIsVisible, isPlaying]);

  const video = videos[index];

  const progress = time && duration ? (time / duration) * 100 : 0;

  return (
    <div>
      <video
        controls
        ref={playerRef}
        className={styles.player}
        onPlaying={() => {
          setIsPlaying(true);
          setDuration(playerRef.current?.duration);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onEnded={() => {
          setIsPlaying(false);
        }}
        onDurationChange={() => {
          setDuration(playerRef.current?.duration);
        }}
        onTimeUpdate={() => {
          setTime(playerRef.current?.currentTime);
        }}
      >
        <source src={video.url} type="video/webm" />
      </video>

      <div>
        <button
          onClick={() => {
            if (!isPlaying) {
              return playerRef.current?.play();
            }

            return playerRef.current?.pause();
          }}
        >
          {!isPlaying ? <FaPlay /> : <FaPause />}
        </button>

        <progress max="100" value={progress.toFixed(0)} />
      </div>
    </div>
  );
};

export default Videos;
