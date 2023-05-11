import { FC, ReactNode } from "react";
import * as styles from "./Aside.css";

type Props = {
  children: ReactNode;
};

const Aside: FC<Props> = ({ children }) => {
  return <aside className={styles.aside}>{children}</aside>;
};

export default Aside;
