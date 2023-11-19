import { ReactNode } from "react";
import * as styles from "./layout.css";

type Props = {
  children: ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return <div className={styles.article}>{children}</div>;
}
