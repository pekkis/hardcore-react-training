"use client";

import VideoPlayer from "@/components/quacktube/VideoPlayer";
import { VideoBlockType } from "@/services/quarticle";
import { FC, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

type Props = {
  data: VideoBlockType;
};

const VideoBlock: FC<Props> = ({ data }) => {
  return (
    <div>
      <VideoPlayer src={data.url} type={data.videoType} autoplayOnIntersect />
    </div>
  );
};

export default VideoBlock;
