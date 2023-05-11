import { FC, ReactNode } from "react";
import * as styles from "./Grid.css";

type Props = {
  children: ReactNode;
};

const Grid: FC<Props> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
