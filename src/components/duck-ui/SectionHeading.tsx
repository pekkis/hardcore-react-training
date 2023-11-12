import { FC, ReactNode } from "react";
import * as styles from "./SectionHeading.css";

type Props = {
  children: ReactNode;
};

const SectionHeading: FC<Props> = ({ children }) => {
  return <h2 className={styles.sectionHeading}>{children}</h2>;
};

export default SectionHeading;
