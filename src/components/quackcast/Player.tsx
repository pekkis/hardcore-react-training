/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { QuackCastAudio } from "@/services/audio";
import { FC } from "react";

type Props = {
  clip: QuackCastAudio;
};

const Player: FC<Props> = ({ clip }) => {
  return (
    <audio controls src={clip.url}>
      audio
    </audio>
  );
};

export default Player;
