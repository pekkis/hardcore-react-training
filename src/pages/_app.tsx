import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";

import * as duckService from "../services/duck";
import { useEffect, useState } from "react";
import CleanseButton from "@/components/debug/CleanseButton";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    duckService.getDucks().then(setDucks);
  }, []);

  const [ducks, setDucks] = useState<duckService.DuckType[]>([]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Main>
        <CleanseButton />
        <Component {...pageProps} ducks={ducks} />
      </Main>
    </>
  );
}
