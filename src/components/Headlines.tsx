import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import Headline from "./Headline";

type Props = {
  headlines: QuarticleType[];
};

export const Headlines: FC<Props> = ({ headlines }) => {
  return (
    <section>
      {headlines.map((headline) => {
        return <Headline key={headline.id} headline={headline} />;
      })}
    </section>
  );
};

export default Headlines;
