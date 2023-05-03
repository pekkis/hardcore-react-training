import type { AppProps } from "next/app";

import "normalize.css";
import "./_app.css";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
