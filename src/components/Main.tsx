import { FC, ReactNode } from "react";
import { mainClass } from "./Main.css";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className={mainClass}>{children}</main>;
};

export default Main;
