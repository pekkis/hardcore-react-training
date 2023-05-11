import { Quarticle } from "@/services/quarticle";
import { FC } from "react";
import Headline from "./Headline";

type Props = {
  quarticles: Quarticle[];
};

const QuarticleList: FC<Props> = ({ quarticles }) => {
  return (
    <section>
      {quarticles.map((q) => {
        return <Headline key={q.id} quarticle={q} />;
      })}
    </section>
  );
};

export default QuarticleList;
