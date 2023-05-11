import { QuarticleType } from "@/services/quarticle";
import { FC, Suspense } from "react";
import ImageBlock from "./ImageBlock";
import MarkdownBlock from "./MarkdownBlock";
import HeadingBlock from "./HeadingBlock";
import * as styles from "./QuarticleRenderer.css";
import Qomments from "../Qomments";
import { getAppId } from "@/services/instance";
import Spinner from "../Spinner";

{
}
type Props = {
  quarticle: QuarticleType;
};

const QuarticleRenderer: FC<Props> = ({ quarticle }) => {
  return (
    <article>
      <h1 className={styles.mainHeading}>{quarticle.headline}</h1>

      <img
        className={styles.image}
        alt={quarticle.headline}
        src={quarticle.mainImage}
      />

      {quarticle.content.map((block, i) => {
        switch (block.type) {
          case "image":
            return <ImageBlock key={i} block={block} />;

          case "markdown":
            return <MarkdownBlock key={i} block={block} />;

          case "heading":
            return <HeadingBlock key={i} block={block} />;
          default:
            return <div key={i}>UNSUPPORTED BLOCK</div>;
        }
      })}

      <Suspense
        fallback={
          <section>
            <Spinner /> QOMMENTS INITIALIZING
          </section>
        }
      >
        <Qomments quarticleId={quarticle.id} appId={getAppId()} />
      </Suspense>
    </article>
  );
};

export default QuarticleRenderer;
