import { Quarticle } from "@/services/quarticle";
import Link from "next/link";
import { FC } from "react";
import { quarticleClass } from "./QuarticleTeaser.css";
import { DateTime } from "luxon";

type Props = {
  quarticle: Quarticle;
};

const QuarticleTeaser: FC<Props> = ({ quarticle }) => {
  const pdt = DateTime.fromISO(quarticle.publishedAt);

  return (
    <article key={quarticle.id} className={quarticleClass}>
      <div>
        <strong>
          <time dateTime="kvaak">
            {pdt.toLocaleString(
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                hour12: false,
                minute: "2-digit"
              },
              {
                locale: "fi"
              }
            )}
          </time>
        </strong>
      </div>

      <div>
        <Link href={`/article/${quarticle.id}`}>{quarticle.headline}</Link>
      </div>
    </article>
  );
};

export default QuarticleTeaser;
