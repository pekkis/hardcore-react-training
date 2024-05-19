"use client";

import { FC, ReactNode, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  const ref = useRef(new QueryClient());

  return (
    <QueryClientProvider client={ref.current}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
