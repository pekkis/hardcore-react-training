import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

const ClientSideOnly: FC<Props> = ({ children, fallback }) => {
  const [isClientSide, setClientSide] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setClientSide(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!isClientSide) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientSideOnly;
