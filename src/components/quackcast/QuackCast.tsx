import { getQuackCast } from "@/services/audio";
import Player from "./Player";
import Markdown from "@/components/Markdown";

const QuackCast = async () => {
  const quackCast = await getQuackCast();
  return (
    <div>
      <Markdown>{quackCast.description}</Markdown>
      <Player clip={quackCast} />
    </div>
  );
};

export default QuackCast;
