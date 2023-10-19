import { QuarticleType } from "@/services/quarticle";
import Link from "next/link";
import { FC } from "react";

type Props = {
  quarticles: QuarticleType[];
};

const Headlines: FC<Props> = ({ quarticles }) => {
  return (
    <>
      {quarticles.map((quarticle) => {
        return (
          <div key={quarticle.id}>
            <div>({quarticle.publishedAt})</div>
            <div>
              <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Headlines;
