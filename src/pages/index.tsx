import { DuckType } from "@/services/duck";
import Head from "next/head";
import { FC, useEffect, useState } from "react";

import Duck from "@/components/Duck";
import { Quarticle, getQuarticles } from "@/services/quarticle";
import { GetServerSideProps } from "next";
import Link from "next/link";
import QuarticleTeaser from "@/components/QuarticleTeaser";

type Props = {
  quarticles: Quarticle[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const quarticles = await getQuarticles();

  return {
    props: {
      quarticles
    }
  };
};

const Home: FC<Props> = ({ quarticles }) => {
  useEffect(() => {
    console.log("HELLUREI");
  });

  useEffect(() => {
    console.log("HIP HAP HUU");
  }, []);

  return (
    <>
      <Head>
        <title>Kvauppalehti</title>
      </Head>

      <h1>Kvauppalehti</h1>

      {quarticles.map((quarticle) => {
        return <QuarticleTeaser key={quarticle.id} quarticle={quarticle} />;
      })}
    </>
  );
};

export default Home;
