import { FC, ReactNode } from "react";

type Proppo = {
  children: ReactNode;
};

type Props = {
  as: "div" | "section" | FC<Proppo>;
  children: ReactNode;
};

const Box: FC<Props> = ({ as: Component = "div", children }) => {
  return <Component>{children}</Component>;
};

export default Box;
