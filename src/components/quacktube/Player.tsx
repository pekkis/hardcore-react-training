/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import usePageVisibility from "@/hooks/usePageVisibility";
import { FC, useEffect, useRef, useState } from "react";
import * as styles from "./Player.css";
import { FaPause, FaPlay } from "react-icons/fa";
import Button from "../duck-ui/Button";

type Props = {
  url: string;
  type: string;
};

const Player: FC<Props> = ({ url, type }) => {
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

  useEffect(() => {
    setIsPlaying(false);
    playerRef.current?.load();
  }, [url]);

  const progress = time && duration ? (time / duration) * 100 : 0;

  return (
    <div className={styles.player}>
      <video
        controls
        ref={playerRef}
        className={styles.video}
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
        <source src={url} type={type} />
      </video>

      <div className={styles.controls}>
        <div className={styles.playButton}>
          <Button
            onClick={() => {
              if (!isPlaying) {
                return playerRef.current?.play();
              }

              return playerRef.current?.pause();
            }}
          >
            {!isPlaying ? <FaPlay /> : <FaPause />}
          </Button>
        </div>

        <div className={styles.progress}>
          <progress
            className={styles.bar}
            max="100"
            value={progress.toFixed(0)}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
