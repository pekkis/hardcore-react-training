// import { getQuarticle } from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as quarticleService from "@/services/quarticle";
import { cache } from "react";
import Qomments from "@/components/qomments/Qomments";

type Props = {
  params: {
    id: string;
  };
};

/*
// notFound();
  tässä pitäisi hakea getQuarticle(id: string) funkkarilla kvartikkeli ja
  piirtää siitä ruudulle jotain.

  JOS kvartikkelia ei löydy, voi kutsua notFoundia() ja se menee sitten 404:seen.
  */

// todo: Metadata!

export const revalidate = 60;

const getQuarticle = cache(async (id: string) => {
  try {
    const quarticle = await quarticleService.getQuarticle(id);
    return quarticle;
  } catch (e) {
    notFound();
  }
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const quarticle = await getQuarticle(params.id);

  return {
    title: quarticle.headline
  };
}

export default async function QuarticlePage(props: Props) {
  const quarticle = await getQuarticle(props.params.id);

  return (
    <div>
      <h1>{quarticle.headline}</h1>

      <p>{JSON.stringify(quarticle.content)}</p>

      <Qomments quarticleId={quarticle.id} />
    </div>
  );
}
