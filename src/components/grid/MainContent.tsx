import { FC, ReactNode } from "react";
import * as styles from "./MainContent.css";

type Props = {
  children: ReactNode;
};

const MainContent: FC<Props> = ({ children }) => {
  return <section className={styles.mainContent}>{children}</section>;
};

export default MainContent;
