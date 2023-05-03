import QuarticleRenderer from "@/components/kvarkki/QuarticleRenderer";
import { Quarticle, getQuarticle } from "@/services/quarticle";
import { GetServerSideProps } from "next";
import { FC } from "react";

type Params = {
  id: string;
};

type Props = {
  quarticle: Quarticle;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params
}) => {
  const id = params?.id;

  if (!id) {
    return {
      notFound: true
    };
  }

  try {
    const quarticle = await getQuarticle(id);
    return {
      props: {
        quarticle
      }
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};

const ArticlePage: FC<Props> = ({ quarticle }) => {
  return <QuarticleRenderer quarticle={quarticle} />;
};

export default ArticlePage;
