import { getQuarticle } from "@/services/quarticle";
import { notFound } from "next/navigation";

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

export default async function QuarticlePage(props: Props) {
  try {
    const quarticle = await getQuarticle(props.params.id);

    return (
      <div>
        <h1>{quarticle.headline}</h1>

        <p>{JSON.stringify(quarticle.content)}</p>
      </div>
    );
  } catch (e) {
    notFound();
  }
}
