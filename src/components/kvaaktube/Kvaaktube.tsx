import { Videos } from "@/components/kvaaktube/Videos";
import { getVideos } from "@/services/video";
import { FC } from "react";

export const Kvaaktube: FC = async () => {
  const videos = await getVideos();

  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
};
