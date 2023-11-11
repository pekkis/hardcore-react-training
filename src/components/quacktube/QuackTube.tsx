import { getVideos } from "@/services/video";
import { FC } from "react";
import Videos from "./Videos";

type Props = {};

const QuackTube = async () => {
  const videos = await getVideos();

  return (
    <div>
      <h2>Kvaaktuubi</h2>

      <Videos videos={videos} />
    </div>
  );
};

export default QuackTube;
