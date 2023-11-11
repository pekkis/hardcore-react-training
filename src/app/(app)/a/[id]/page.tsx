import { cache } from "react";

import Comments from "@/components/comments/Comments";
import QuarticleRenderer from "@/components/quarticle/QuarticleRenderer";
import * as quarticleService from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const getQuarticle = cache(quarticleService.getQuarticle);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const cert = await getQuarticle(params.id);
    return {
      title: `${cert.headline} - Kvauppalehti`
    };
  } catch (e) {
    notFound();
  }
}

const QuarticlePage = async ({ params }: Props) => {
  try {
    const quarticle = await getQuarticle(params.id);

    return (
      <div>
        <QuarticleRenderer quarticle={quarticle} />

        <hr />

        <Comments quarticleId={quarticle.id} />
      </div>
    );
  } catch (e) {
    notFound();
  }
};

export default QuarticlePage;
