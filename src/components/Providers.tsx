"use client";

import { FC, ReactNode, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  const clientRef = useRef(new QueryClient());

  return (
    <QueryClientProvider client={clientRef.current}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
