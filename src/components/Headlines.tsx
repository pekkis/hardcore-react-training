import { QuarticleType } from "@/services/quarticle";
import { FC, memo } from "react";
import Headline from "./Headline";

type Props = {
  quarticles: QuarticleType[];
};

const Headlines: FC<Props> = ({ quarticles }) => {
  return (
    <div>
      {quarticles.map((q) => {
        return <Headline key={q.id} quarticle={q} />;
      })}
    </div>
  );
};

export default memo(Headlines);
