/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { FC, useEffect, useRef, useState } from "react";
import * as styles from "./Video.css";

import { FaPlay, FaPause, FaPoop } from "react-icons/fa";
import Button from "../duck-ui/Button";

type Props = {
  source: string;
};

const Video: FC<Props> = ({ source }) => {
  const ref = useRef<HTMLVideoElement>(null);

  console.log("SOURCE", source);

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState<number | undefined>();
  const [duration, setDuration] = useState<number | undefined>(undefined);

  useEffect(() => {
    ref.current?.load();
  }, [source]);

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
        <Button
          onClick={() => {
            if (ref.current?.paused) {
              return ref.current?.play();
            }

            return ref.current?.pause();
          }}
        >
          {!isPlaying ? <FaPlay /> : <FaPause />}
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            if (!document.pictureInPictureElement) {
              ref.current?.requestPictureInPicture();
            } else {
              document.exitPictureInPicture();
            }
          }}
        >
          <FaPoop />
        </Button>
        <progress max="100" value={progress} />
      </div>
    </div>
  );
};

export default Video;
