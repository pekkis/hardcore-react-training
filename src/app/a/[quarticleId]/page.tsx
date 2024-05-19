import QuarticleRenderer from "@/components/quarticle-renderer/QuarticleRenderer";
import Comments from "@/components/quarticles/Comments";
import * as quarticleService from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { cache } from "react";
import { ErrorBoundary } from "react-error-boundary";

const getQuarticle = cache(async (id: string) => {
  const quarticle = await quarticleService.getQuarticle(id);
  return quarticle;
});

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  try {
    const quarticle = await getQuarticle(params.quarticleId);

    return {
      title: quarticle.headline
    };
  } catch (e) {
    notFound();
  }
};

type Props = {
  params: {
    quarticleId: string;
  };
};

const QuarticlePage = async ({ params }: Props) => {
  const quarticle = await getQuarticle(params.quarticleId);

  return (
    <div>
      <QuarticleRenderer quarticle={quarticle} />

      <ErrorBoundary fallback={<div>oi ei, kommentit feilasivat!</div>}>
        <Comments quarticleId={quarticle.id} />
      </ErrorBoundary>
    </div>
  );
};

export default QuarticlePage;
