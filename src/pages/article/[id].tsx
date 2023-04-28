import { Quarticle, getQuarticle } from "@/services/quarticle";
import { GetServerSideProps } from "next";
import { FC } from "react";
import Image from "next/image";
import Kvarkki from "@/components/kvarkki/Kvarkki";
import Comments from "@/components/Comments";

type Params = {
  id: string;
};

type Props = {
  quarticle: Quarticle;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  try {
    const quarticle = await getQuarticle(context.params?.id as string);
    return {
      props: {
        quarticle
      } // will be passed to the page component as props
    };
  } catch (e: unknown) {
    return {
      notFound: true
    };
  }
};

const QuarticlePage: FC<Props> = ({ quarticle }) => {
  return (
    <section>
      <Kvarkki quarticle={quarticle} />
      <Comments quarticle={quarticle} />
    </section>
  );
};

export default QuarticlePage;
