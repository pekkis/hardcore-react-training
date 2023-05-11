import SuggestedQuarticles from "@/components/SuggestedQuarticles";
import Aside from "@/components/grid/Aside";
import Grid from "@/components/grid/Grid";
import MainContent from "@/components/grid/MainContent";
import QuarticleRenderer from "@/components/kvarkki/QuarticleRenderer";
import * as quarticleService from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 5;

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

const getSuggestedQuarticles = cache(async () => {
  try {
    const quarticle = await quarticleService.getQuarticles(0, 50);
    return quarticle;
  } catch (e) {
    notFound();
  }
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const quarticle = await getQuarticle(params.id);
    return {
      title: quarticle.headline,
      openGraph: {
        images: [quarticle.mainImage]
      }
    };
  } catch (e) {
    notFound();
  }
}

export default async function Page({ params }: Props) {
  const quarticlePromise = getQuarticle(params.id);
  const suggestedQuarticlesPromise = getSuggestedQuarticles();

  const quarticle = await quarticlePromise;

  return (
    <Grid>
      <MainContent>
        <QuarticleRenderer quarticle={quarticle} />
      </MainContent>
      <Aside>
        <SuggestedQuarticles quarticlesPromise={suggestedQuarticlesPromise} />
      </Aside>
    </Grid>
  );
}
