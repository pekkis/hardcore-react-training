"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
  const queryClientRef = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
