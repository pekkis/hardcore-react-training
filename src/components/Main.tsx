import { FC, ReactNode } from "react";
import * as styles from "./Main.css";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
