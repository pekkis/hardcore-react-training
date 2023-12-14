"use client";

import { FC, ReactNode, useRef } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  const clientRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: true,
          refetchOnReconnect: true
        }
      }
    })
  );

  return (
    <>
      <QueryClientProvider client={clientRef.current}>
        <ReactQueryDevtools position="right" />
        {children}
      </QueryClientProvider>
    </>
  );
};

export default Providers;
