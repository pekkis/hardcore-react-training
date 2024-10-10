import { Comments } from "@/components/quarticle/Comments";
import { CommentsForm } from "@/components/quarticle/CommentsForm";
import { getQuarticle } from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { cache } from "react";
// cache

type Props = {
  params: {
    quarticleId: string;
  };
};

const fetcher = cache(async (id: string) => {
  return getQuarticle(id);
});

// fetch api

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { quarticleId } = props.params;

  try {
    const quarticle = await fetcher(quarticleId);
    return {
      title: quarticle.headline
    };
  } catch (e) {
    console.log(e);
    notFound();
  }
};

export default async function QuarticlePage(props: Props) {
  const { quarticleId } = props.params;

  try {
    const quarticle = await fetcher(quarticleId);

    console.log(quarticle);

    return (
      <article>
        <h1>{quarticle.headline}</h1>

        <Comments quarticleId={quarticle.id} />
      </article>
    );
  } catch {
    notFound();
  }
}
