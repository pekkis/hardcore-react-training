import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Paragraph: FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};

export default Paragraph;
