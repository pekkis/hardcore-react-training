import { Quarticle } from "@/services/quarticle";
import { FC } from "react";
import ImageBlock from "./ImageBlock";
import MarkdownBlock from "./MarkdownBlock";
import HeadingBlock from "./HeadingBlock";
import { imageClass } from "./QuarticleRenderer.css";

type Props = {
  quarticle: Quarticle;
};

const QuarticleRenderer: FC<Props> = ({ quarticle }) => {
  return (
    <article>
      <h1>{quarticle.headline}</h1>

      <img
        className={imageClass}
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
    </article>
  );
};

export default QuarticleRenderer;
