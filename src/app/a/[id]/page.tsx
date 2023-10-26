import Comments from "@/components/comments/Comments";
import { getQuarticle } from "@/services/quarticle";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

/*
export const metadata: Metadata = {
  title: "Kvartikkeli"
};
*/

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  return {
    title: `Kvartikkeli - ${params.id}`
  };
};

// exporttaa cache-asetukset ja muut

export default async function QuarticlePage(props: Props) {
  try {
    const quarticle = await getQuarticle(props.params.id);

    return (
      <div>
        <h1>Kvartikkelin oma sivu {props.params.id}</h1>

        <hr />

        <Comments />

        <hr />

        <div>{JSON.stringify(quarticle)}</div>
      </div>
    );
  } catch (e) {
    notFound();
  }
}
