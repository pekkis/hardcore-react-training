import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import HeadingBlock from "./HeadingBlock";
import ImageBlock from "./ImageBlock";
import MarkdownBlock from "./MarkdownBlock";
import * as styles from "./QuarticleRenderer.css";
import UnknownBlock from "./UnknownBlock";
import VideoBlock from "./VideoBlock";
import AudioBlock from "./AudioBlock";
import QuestionBlock from "./QuestionBlock";

type Props = {
  quarticle: QuarticleType;
};

const QuarticleRenderer: FC<Props> = ({ quarticle }) => {
  return (
    <article>
      <h1>{quarticle.headline}</h1>

      <p className={styles.lead}>{quarticle.lead}</p>

      {quarticle.content.map((block, i) => {
        switch (block.type) {
          case "image":
            return <ImageBlock key={i} block={block} />;

          case "markdown":
            return <MarkdownBlock key={i} block={block} />;

          case "heading":
            return <HeadingBlock key={i} block={block} />;

          case "video":
            return <VideoBlock key={i} block={block} />;

          case "audio":
            return <AudioBlock key={i} block={block} />;

          case "question":
            return <QuestionBlock key={i} block={block} />;

          default:
            return <UnknownBlock key={i} block={block} />;
        }
      })}
    </article>
  );
};

export default QuarticleRenderer;
