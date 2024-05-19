/* eslint-disable jsx-a11y/media-has-caption */

import { AudioBlockType } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  data: AudioBlockType;
};

const AudioBlock: FC<Props> = ({ data }) => {
  return (
    <div>
      <audio src={data.url} controls />
    </div>
  );
};

export default AudioBlock;
