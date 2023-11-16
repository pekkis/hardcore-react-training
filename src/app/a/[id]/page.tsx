import { cache } from "react";
import { Metadata } from "next";

import * as quarticleService from "@/services/quarticle";
import { notFound } from "next/navigation";
import Comments from "@/components/comments/Comments";

import Image from "next/image";

import kvaak from "@/assets/duckling-2.png";

type Props = {
  params: {
    id: string;
  };
};

const getQuarticle = cache(async (id: string) => {
  try {
    const quarticle = await quarticleService.getQuarticle(id);

    return quarticle;
  } catch (e) {
    notFound();
  }
});

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const quarticle = await getQuarticle(params.id);
  return {
    title: quarticle.headline
  };
};

export default async function QuarticlePage({ params }: Props) {
  const quarticle = await getQuarticle(params.id);

  return (
    <>
      <article>
        <h1>{quarticle.headline}</h1>

        <Image alt="kvaak" src={kvaak} />
        <img alt="pääkuva" src={quarticle.mainImage} />
        <p>{quarticle.lead}</p>

        {JSON.stringify(quarticle.content)}
      </article>

      <Comments quarticleId={quarticle.id} />
    </>
  );
}
