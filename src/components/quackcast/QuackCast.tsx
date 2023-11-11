import { getQuackCast } from "@/services/audio";
import { FC } from "react";
import Player from "./Player";

type Props = {};

const QuackCast = async () => {
  const quackCast = await getQuackCast();
  return (
    <div>
      <Player clip={quackCast} />
    </div>
  );
};

export default QuackCast;
