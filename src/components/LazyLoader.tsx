import { FC, ReactNode, Suspense } from "react";

const LazyLoader: FC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense fallback={<span>LADDARE GRANDI</span>}>{children}</Suspense>;
};
export default LazyLoader;
