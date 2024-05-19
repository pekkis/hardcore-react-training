/* eslint-disable jsx-a11y/media-has-caption */

import { getQuackCast } from "@/services/audio";
import { FC } from "react";
import Markdown from "../Markdown";

const QuackCast: FC = async () => {
  const kvaakcast = await getQuackCast();

  return (
    <div>
      <audio autoPlay={false} controls src={kvaakcast.url} />

      <Markdown>{kvaakcast.description}</Markdown>
    </div>
  );
};

export default QuackCast;
