/* eslint-disable jsx-a11y/media-has-caption */

import { getVideos } from "@/services/video";
import { FC } from "react";
import InnerQuackTube from "./InnerQuackTube";

const QuackTube: FC = async () => {
  const videos = await getVideos();

  return <InnerQuackTube videos={videos} />;
};

export default QuackTube;
