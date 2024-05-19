import { QuarticleType } from "@/services/quarticle";
import { FC } from "react";
import UnknownBlock from "./block/UnknownBlock";
import MarkdownBlock from "./block/MarkdownBlock";
import AudioBlock from "./block/AudioBlock";
import HeadingBlock from "./block/HeadingBlock";
import VideoBlock from "./block/VideoBlock";

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
            return <MarkdownBlock key={i} data={block} />;

          case "audio":
            return <AudioBlock key={i} data={block} />;

          case "heading":
            return <HeadingBlock key={i} data={block} />;

          case "video":
            return <VideoBlock key={i} data={block} />;

          default:
            return <UnknownBlock key={i} data={block} />;
        }
      })}
    </article>
  );
};

export default QuarticleRenderer;
