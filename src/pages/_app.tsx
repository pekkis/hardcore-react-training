import type { AppProps } from "next/app";

import "normalize.css";
import "./_app.css";
import Main from "@/components/Main";
import Header from "@/components/Header";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </QueryClientProvider>
    </>
  );
}
