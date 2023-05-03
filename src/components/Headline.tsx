import { Quarticle } from "@/services/quarticle";
import { FC } from "react";

type Props = {
  // quarticle: Quarticle;
  lead: Quarticle["lead"];
  headline: Quarticle["headline"];
};

const Headline: FC<Props> = (props) => {
  const { lead, headline } = props;
  return (
    <div>
      <h2>{headline}</h2>
      <p>{lead}</p>
    </div>
  );
};

export default Headline;
