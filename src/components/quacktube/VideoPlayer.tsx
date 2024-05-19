/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { FC, useEffect, useRef, useState } from "react";
import * as styles from "./VideoPlayer.css";

import { FaPause, FaPlay } from "react-icons/fa";
import { useIntersectionObserver } from "usehooks-ts";

type Props = {
  src: string;
  type: string;
  autoplayOnIntersect?: boolean;
};

const VideoPlayer: FC<Props> = ({ src, type, autoplayOnIntersect = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { isIntersecting, ref } = useIntersectionObserver();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!autoplayOnIntersect) {
      return;
    }

    if (isIntersecting) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isIntersecting, autoplayOnIntersect]);

  return (
    <div ref={ref} className={styles.container}>
      <video
        ref={videoRef}
        className={styles.container}
        autoPlay={false}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onTimeUpdate={(e) => {
          const v = videoRef.current;
          if (!v) {
            return;
          }

          setProgress((v.currentTime / v.duration) * 100);
        }}
      >
        <source src={src} type={type} />
      </video>

      <div>
        <progress max="100" value={progress} />
        <button
          onClick={() => {
            !isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
