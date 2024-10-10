/* eslint-disable jsx-a11y/media-has-caption */

import { Markdown } from "@/components/Markdown";
import { getQuackCast } from "@/services/audio";
import { FC } from "react";

export const Kvaakcast: FC = async () => {
  const kvaakcast = await getQuackCast();

  // const markdown = kvaakcast.description

  return (
    <div>
      <audio controls src={kvaakcast.url} />

      <Markdown>{kvaakcast.description}</Markdown>
    </div>
  );
};
