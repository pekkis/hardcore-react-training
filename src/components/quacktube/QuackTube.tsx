import { getVideos } from "@/services/video";
import { FC } from "react";
import VideoSelector from "./VideoSelector";

const QuackTube: FC = async () => {
  const videos = await getVideos();

  return (
    <>
      <VideoSelector videos={videos} />
    </>
  );
};

export default QuackTube;
