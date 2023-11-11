import { QuarticleType } from "@/services/quarticle";
import Link from "next/link";
import { FC } from "react";
import * as styles from "./Headline.css";
import { DateTime } from "luxon";

type Props = {
  quarticle: QuarticleType;
};

const Headline: FC<Props> = ({ quarticle }) => {
  const publishedDt = DateTime.fromISO(quarticle.publishedAt)
    .setLocale("fi")
    .setZone("Europe/Helsinki");

  return (
    <div className={styles.headline}>
      <h3>
        <Link href={`/a/${quarticle.id}`}>
          {quarticle.headline} (
          {publishedDt.toLocaleString(DateTime.DATETIME_MED)})
        </Link>
      </h3>

      <p>{quarticle.lead}</p>
    </div>
  );
};

export default Headline;
