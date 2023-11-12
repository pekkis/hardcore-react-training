import { getVideos } from "@/services/video";
import Videos from "./Videos";

const QuackTube = async () => {
  const videos = await getVideos();

  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
};

export default QuackTube;
