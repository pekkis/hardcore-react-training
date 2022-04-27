import { FC, ReactNode, Suspense } from "react";

const LazyLoader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<span>lazily loading da page</span>}>
      {children}
    </Suspense>
  );
};

export default LazyLoader;
