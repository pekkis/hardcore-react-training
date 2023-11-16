import { getQuackCast } from "@/services/audio";
import AudioPlayer from "./AudioPlayer";

const Kvaakcast = async () => {
  const kvaakcast = await getQuackCast();

  return (
    <div>
      <AudioPlayer clip={kvaakcast} />
    </div>
  );
};

export default Kvaakcast;
