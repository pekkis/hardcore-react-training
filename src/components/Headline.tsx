import { Quarticle } from "@/services/quarticle";
import Link from "next/link";
import { FC, memo } from "react";

type Props = {
  id: Quarticle["id"];
  // quarticle: Quarticle;
  lead: Quarticle["lead"];
  headline: Quarticle["headline"];
};

const Headline: FC<Props> = (props) => {
  const { id, lead, headline } = props;
  return (
    <div>
      <h2>
        <Link href={`/a/${id}`}>{headline}</Link>
      </h2>
      <p>{lead}</p>
    </div>
  );
};

export default memo(Headline);
