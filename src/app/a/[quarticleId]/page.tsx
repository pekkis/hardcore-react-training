import Quarticle from "@/components/quarticles/Quarticle";
import { getQuarticle } from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    quarticleId: string;
  };
};

// React (or Next.js, nobody knows) is monkey patching fetch.

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  try {
    const quarticle = await getQ(params.quarticleId);

    return {
      title: quarticle.headline
    };
  } catch (e) {
    notFound();
  }
};

const getQ = cache(async (id: string) => {
  const quarticle = await getQuarticle(id);
  return quarticle;
});

export default async function QuarticlePage({ params }: Props) {
  const quarticle = await getQ(params.quarticleId);

  return (
    <div>
      <Quarticle quarticle={quarticle} />
    </div>
  );
}
