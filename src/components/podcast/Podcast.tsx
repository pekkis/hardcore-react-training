/* eslint-disable jsx-a11y/media-has-caption */

import { getQuackCast } from "@/services/audio";
import { FC } from "react";

const Podcast: FC = async () => {
  const podcast = await getQuackCast();

  return (
    <div>
      <audio controls src={podcast.url} />
    </div>
  );
};

export default Podcast;
