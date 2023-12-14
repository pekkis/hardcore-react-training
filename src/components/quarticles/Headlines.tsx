import { getQuarticles } from "@/services/quarticle";
import Link from "next/link";
import { FC } from "react";

const Headlines: FC = async () => {
  const latest = await getQuarticles(0, 10);

  return (
    <div>
      {latest.quarticles.map((quarticle) => {
        return (
          <div key={quarticle.id}>
            <h3>
              <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>{" "}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Headlines;
