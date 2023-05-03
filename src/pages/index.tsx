import Clock from "@/components/Clock";
import Headline from "@/components/Headline";
import { Quarticle, getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type Props = {
  quarticles: Quarticle[];
  now: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=59"
  );

  const quarticles = await getQuarticles();
  return {
    props: {
      quarticles,
      now: DateTime.utc().toISO() as string
    }
  };
};

// const Home = FC<Props>

export default function Home({ quarticles, now }: Props): JSX.Element {
  useEffect(() => {
    console.log("RENDERADO");
  });

  const [dt, setDt] = useState<DateTime>(DateTime.fromISO(now));

  // setDt(newDt)
  // setDt(currentDt => newDt)

  useEffect(() => {
    const interval = setInterval(() => {
      setDt((current) =>
        current.plus({
          seconds: 1
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
  const [quarticles, setQuarticles] = useState<Quarticle[]>([]);

  useEffect(() => {
    getQuarticles().then(setQuarticles);
  }, []);
  */

  // const now = DateTime.utc();

  // console.log("quarticles", { quarticles });

  return (
    <>
      <Head>
        <title>Hardcore React Training 2023</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Clock zone="America/New_York" time={dt} />
        <Clock darkMode zone="Europe/London" time={dt} />
        <Clock zone="Europe/Helsinki" time={dt} />
        <Clock darkMode zone="Asia/Tokyo" time={dt} />

        {quarticles.map((quarticle) => {
          return (
            <Headline
              key={quarticle.id}
              lead={quarticle.lead}
              headline={quarticle.headline}
            />
          );
        })}
      </main>
    </>
  );
}
