// import { getQuarticle } from "@/services/quarticle";
import { Metadata } from "next";

import * as quarticleService from "@/services/quarticle";
import { cache } from "react";
import { notFound } from "next/navigation";
import QuarticleRenderer from "@/components/quarticles/QuarticleRenderer";
import Comments from "@/components/comments/Comments";

type Props = {
  params: {
    id: string;
  };
};

const getQuarticle = cache(quarticleService.getQuarticle);

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  try {
    const quarticle = await getQuarticle(props.params.id);

    return {
      title: `${quarticle.headline} - Kvauppalehti`,
      description: quarticle.lead
    };
  } catch (e) {
    notFound();
  }
};

export default async function QuarticlePage(props: Props) {
  const quarticle = await getQuarticle(props.params.id);

  // tän pitäs varmasti myöhemmin rendaa joku komponentti eikä inlinettää.

  return (
    <>
      <Comments quarticleId={quarticle.id} />

      <hr />

      <QuarticleRenderer quarticle={quarticle} />
    </>
  );
}
