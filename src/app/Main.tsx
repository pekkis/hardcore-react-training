import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
