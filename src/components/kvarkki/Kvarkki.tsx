import {
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  MarkdownBlock,
  Quarticle
} from "@/services/quarticle";
import Image from "next/image";
import { FC } from "react";
import Markdown from "markdown-to-jsx";

type Props = {
  quarticle: Quarticle;
};

const UnknownBlock = () => {
  return <div>kvarkki ei tue tätä blockkia!</div>;
};

const HeadingBlock: FC<{ block: HeadingBlock }> = ({ block }) => {
  return <h2>{block.text}</h2>;
};

const MarkdownBlock: FC<{ block: MarkdownBlock }> = ({ block }) => {
  return <Markdown options={{ forceBlock: true }}>{block.text}</Markdown>;
};

const ImageBlock: FC<{ block: ImageBlock }> = ({ block }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        aspectRatio: 4 / 3,
        margin: "1em 0"
      }}
    >
      <Image fill alt={block.alt} src={block.url} />
    </div>
  );
};

const ContentBlock: FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case "heading":
      return <HeadingBlock block={block} />;
    case "markdown":
      return <MarkdownBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    default:
      return <UnknownBlock />;
  }
};

const Kvarkki: FC<Props> = ({ quarticle }) => {
  return (
    <section>
      <h1>{quarticle.headline}</h1>

      <p>{quarticle.publishedAt}</p>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          aspectRatio: 4 / 3
        }}
      >
        <Image fill alt={quarticle.lead} src={quarticle.mainImage} />
      </div>

      {quarticle.content.map((block, blockIndex) => {
        return <ContentBlock key={blockIndex} block={block} />;
      })}
    </section>
  );
};

export default Kvarkki;
