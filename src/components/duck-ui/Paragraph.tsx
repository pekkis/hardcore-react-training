import { FC, ReactNode } from "react";
import * as styles from "./Paragraph.css";

type Props = {
  children?: ReactNode;
};

const Paragraph: FC<Props> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default Paragraph;
