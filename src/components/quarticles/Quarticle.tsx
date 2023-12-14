import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import Markdown from "./Markdown";

type Props = {
  quarticle: QuarticleType;
};

/*
The quarticle LEAD is actually markdown and
we must parse and render markdown here.
*/

const Quarticle: FC<Props> = ({ quarticle }) => {
  return (
    <div>
      <h1>{quarticle.headline}</h1>

      <Markdown>{quarticle.lead}</Markdown>
    </div>
  );
};

export default Quarticle;
