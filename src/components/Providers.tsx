"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useRef } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

// @tanstack/react-query

const Providers: FC<Props> = ({ children }) => {
  const queryClientRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 5000,
          refetchOnWindowFocus: true,
          refetchOnReconnect: true
        }
      }
    })
  );
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
