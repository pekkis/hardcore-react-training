import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import MarkdownBlock from "./MarkdownBlock";

type Props = {
  quarticle: QuarticleType;
};

const QuarticleRenderer: FC<Props> = ({ quarticle }) => {
  return (
    <article>
      <h1>{quarticle.headline}</h1>

      <p>{quarticle.lead}</p>

      {quarticle.content.map((block, i) => {
        switch (block.type) {
          case "markdown":
            return <MarkdownBlock key={i} block={block} />;

          // TODO: loput spesifit blokkityypit.

          default:
            return (
              <div key={i}>
                {block.type} {JSON.stringify(block)}
              </div>
            );
        }
      })}
    </article>
  );
};

export default QuarticleRenderer;
