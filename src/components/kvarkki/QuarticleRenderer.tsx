import { Quarticle } from "@/services/quarticle";
import { FC, useEffect, useState } from "react";
import ImageBlock from "./ImageBlock";
import MarkdownBlock from "./MarkdownBlock";
import HeadingBlock from "./HeadingBlock";
import { imageClass, palkkiClass } from "./QuarticleRenderer.css";
import Button from "../Button";
import { addFavourite, getFavourites } from "@/services/favourite";
import useFavourites from "@/hooks/useFavourites";
import ClientSideOnly from "../ClientSideOnly";
import Comments from "../Comments";

type Props = {
  quarticle: Quarticle;
};

const QuarticleRenderer: FC<Props> = ({ quarticle }) => {
  const { addFavourite, removeFavourite, isFavourite } =
    useFavourites(quarticle);

  const buttonText = isFavourite ? "Poista suosiqeista" : "Lisää suosiqeihin";

  return (
    <article>
      <h1>{quarticle.headline}</h1>

      <ClientSideOnly fallback={<div>laddare...</div>}>
        <div className={palkkiClass}>
          <Button
            variant="primary"
            onClick={() => {
              isFavourite ? removeFavourite() : addFavourite();
            }}
          >
            {buttonText}
          </Button>
        </div>
      </ClientSideOnly>

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

      <Comments appId="loso" articleId="tussi" />
    </article>
  );
};

export default QuarticleRenderer;
