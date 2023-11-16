/* eslint-disable jsx-a11y/media-has-caption */

import { QuackCastAudio } from "@/services/audio";
import { FC } from "react";
import Markdown from "../Markdown";

type Props = {
  clip: QuackCastAudio;
};

const AudioPlayer: FC<Props> = ({ clip }) => {
  return (
    <div>
      <audio controls src={clip.url} />
      <div>
        <Markdown>{clip.description}</Markdown>
      </div>
    </div>
  );
};

export default AudioPlayer;
