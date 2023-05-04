import { Quarticle } from "@/services/quarticle";
import { FC, ReactNode, memo } from "react";
import Headline from "./Headline";

type Props = {
  quarticles: Quarticle[];
  title?: ReactNode;
};

const QuarticleList: FC<Props> = ({ quarticles, title }) => {
  return (
    <section>
      {title}
      {quarticles.map((quarticle) => {
        return (
          <Headline
            id={quarticle.id}
            key={quarticle.id}
            lead={quarticle.lead}
            headline={quarticle.headline}
          />
        );
      })}
    </section>
  );
};

export default memo(QuarticleList);
