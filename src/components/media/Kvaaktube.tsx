import { getVideos } from "@/services/video";
import VideoPlayer from "./VideoPlayer";

const Kvaaktube = async () => {
  const videos = await getVideos();

  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
};

export default Kvaaktube;
