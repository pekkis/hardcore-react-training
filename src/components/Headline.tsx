import { Quarticle } from "@/services/quarticle";
import Link from "next/link";
import { FC } from "react";
import { headlineClass } from "./Headline.css";

type Props = {
  quarticle: Quarticle;
};

const Headline: FC<Props> = ({ quarticle }) => {
  return (
    <article className={headlineClass}>
      <h2>
        <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
      </h2>

      <p>{quarticle.lead}</p>

      <time dateTime={quarticle.publishedAt}>{quarticle.publishedAt}</time>
    </article>
  );
};

export default Headline;
