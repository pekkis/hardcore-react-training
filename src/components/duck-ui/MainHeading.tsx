import { FC, ReactNode } from "react";
import * as styles from "./MainHeading.css";

type Props = {
  children: ReactNode;
};

const MainHeading: FC<Props> = ({ children }) => {
  return <h1 className={styles.mainHeading}>{children}</h1>;
};

export default MainHeading;
