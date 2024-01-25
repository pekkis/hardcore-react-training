import { getVideos } from "@/services/video";
import { FC } from "react";
import Videos from "./Videos";

const QuackTube: FC = async () => {
  const videos = await getVideos();

  return (
    <div>
      <div>KVAAKTUUPI</div>

      <Videos videos={videos} />
    </div>
  );
};

export default QuackTube;
